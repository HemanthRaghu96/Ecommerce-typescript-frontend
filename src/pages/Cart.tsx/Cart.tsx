// Cart.tsx
import React, { useContext } from "react";
import { MyContext } from "../../Context";

const Cart: React.FC = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Cart must be used within a MyContext.Provider");
  }

  const { cart, removeFromCart } = context;

  return (
    <div>
      <h2 className="font-bold text-4xl">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="mt-10">
          {cart.map((item) => (
            <div key={item._id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>Price: Rs.{item.price}.00</p>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
