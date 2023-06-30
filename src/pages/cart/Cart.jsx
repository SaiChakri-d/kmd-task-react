import React, { useContext } from "react";
import { ShopContext } from "../../context/Shopcontext";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <>
      <div className="cart">
        <div>
          <h1>Shopping Cart</h1>
        </div>
        <div className="cart">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="checkout">
            <div className="subtotal">
              <h2>Subtotal: ${totalAmount.toLocaleString()}</h2>
            </div>
            <div className="buttons">
              <button onClick={() => navigate("/")}>Shop More</button>
              <button
                onClick={() => {
                  checkout();
                  navigate("checkout");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <h2 style={{ color: "slategray" }}>Your shopping cart is empty!</h2>
        )}
      </div>
    </>
  );
}
