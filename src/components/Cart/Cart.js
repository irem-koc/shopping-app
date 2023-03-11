import React from "react";
import "./Cart.css";
const Cart = ({ cartItems,handleAddProduct,handleRemoveProduct }) => {
    const totalPrice = cartItems.reduce((price,item)=>price+ item.quantity*item.price, 0)
    return (
        <div className="cart-items">
            <div className="cart-items-header">Cart Items</div>
            {cartItems.length === 0 && (
                <div className="cart-items-empty">No items are added</div>
            )}
            <div>
                {cartItems.map((cartItem) => (
                    <div key={cartItem.id} className="card-items-list">
                        <img
                                className="cart-items-image"
                                src={cartItem.image}
                                alt={cartItem.name}
                            />
                        <div className="cart-items-name">
                        {cartItem.name}
                        </div>
                        <div className="cart-items-function">
                            <button className="cart-items-add" onClick={() => handleAddProduct(cartItem)}>+</button>
                            <button className="cart-items-remove" onClick={() => handleRemoveProduct(cartItem)}>-</button>
                        </div>
                        <div className="cart-items-price">
                            {cartItem.quantity} * {cartItem.price}
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-items-total-price">
                Total Price
                <div className="cart-Items-total-price">${totalPrice}</div>   
            </div>
        </div>
    );
};

export default Cart;
