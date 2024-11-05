import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Calculate total quantity and total price
  const totalQty = cart.reduce(
    (total, product) => total + (product.qty || 1),
    0
  );
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * (product.qty || 1),
    0
  );

  const handleCheckout = () => {
    setLoading(true);
    setShowSuccess(false); // Hide the success message initially

    // Simulate a loading period
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true); // Show success message
      // Navigate to success page after showing the message
      setTimeout(() => {
        navigate("/success");
      }, 2000);
    }, 2000); // Simulate a loading duration
  };

  // Function to remove a specific item from the cart
  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <div className=" fixed pb- right-0 top-10 w-full lg:w-1/4 h-full p-5 bg-white shadow-lg overflow-y-auto">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-xl font-bold text-gray-800">
            Your Cart is Empty
          </h1>
          <Link to="/" className="mt-4 text-blue-500 hover:underline">
            Continue Shopping...
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex border border-gray-300 rounded-lg p-3 shadow-sm"
            >
              <img
                src={product.img}
                className="cartshowimg h-18 rounded-md"
                alt={product.name}
              />
              <div className="pl-10 ml-10 lg:pl-0 lg:ml-5 flex flex-col justify-between m-auto w-2/3">
                <h5 className="text-lg font-semibold">{product.name}</h5>
                <p className="text-gray-600">Price: {product.price} ₹</p>
                {/* <p className="text-gray-600">Quantity: {product.qty || 1}</p> */}
                <button
                  onClick={() => removeItem(product.id)}
                  className="removecartbtn mt-2 bg-red-500 text-white 
                  py-1 rounded-md hover:bg-red-600 transition duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4">
            <h4 className="font-semibold text-gray-800">
              Total Items: {totalQty}
            </h4>
            <h4 className="font-semibold text-gray-800">
              Total Amount: {totalPrice} ₹
            </h4>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-4 flex flex-col space-y-2">
          <button
            onClick={() => setCart([])}
            className="bg-gray-500 text-white 
            py-2 rounded-md hover:bg-gray-600 transition duration-200"
          >
            Clear Cart
          </button>
          <button
            onClick={handleCheckout}
            className="bg-green-500 text-white 
            py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            Checkout
          </button>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
          <p className="mt-4 text-lg text-gray-800">Processing your order...</p>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-lg transition-opacity duration-300">
            <p>Your order has been successfully placed!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
