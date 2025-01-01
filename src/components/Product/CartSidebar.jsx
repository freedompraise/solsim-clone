import React from "react";

const CartSidebar = ({ closeCart }) => {
  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-6">
      <button
        onClick={closeCart}
        className="text-gray-500 hover:text-black text-xl font-bold"
      >
        &times;
      </button>
      <h3 className="text-lg font-semibold mt-4">Your Cart</h3>
      {/* Cart items */}
      <div className="mt-4">
        <div className="flex justify-between">
          <span>SOLSIM Global</span>
          <span>1.27 SOL</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Total</span>
          <span>6.27 SOL</span>
        </div>
      </div>
      <button className="w-full bg-[#CC3DFF] text-white py-2 rounded mt-6 hover:bg-purple-700">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSidebar;
