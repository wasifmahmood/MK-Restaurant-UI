import React, { useState } from "react";
import "./Cart.css"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Checkout } from "../../pages/homepage/checkout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



export const CartSection = () => {
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
        // setTotalPrice((prevPrice) => prevPrice + 659);
    };
    const decrement = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
            // setTotalPrice((prevPrice) => prevPrice - 659);
        }
    };
    return (

        <div className="m-2 p-3 shadow rounded card border-0">
            <h4 className="my-order border-bottom pb-3">My Order</h4>
            <div className="menu-cart-list">
                <div className="item-detail-section border-bottom p-2 d-flex" style={{ flexDirection: 'column' }}>
                    <div className="item-detail">
                        <div className="item-quantity remove border rounded ">1x </div>
                        <div className="item-data">
                            <div className="name-data px-2">Patty Melt </div>
                            <div className="price-data">Rs 499</div>
                        </div>
                    </div>
                    <div className="remove-add pt-2 d-flex justify-content-end">
                        <div className="remove border rounded" onClick={decrement}>
                            <AiOutlineMinus />
                        </div>
                        <div className="add border rounded" onClick={increment}>
                            <AiOutlinePlus />
                        </div>
                    </div>
                </div>
                <div className="border-bottom p-2">
                    <div className="line-item d-flex justify-content-between">
                        <div className="f2 name">Tax</div>
                        <div className="tax-price">Rs 160</div>
                    </div>
                </div>
            </div>
            <div className="cart-checkout-section">
                <div className="d-flex justify-content-between p-2">
                    <div className="f2 name">Total</div>
                    <div className="total-price">
                        <span>Rs {totalPrice}</span>
                    </div>
                </div>
                <div className="checkout row px-3" >
                    <Link to="/checkout" className="checkout-button">Checkout</Link>
                </div>
            </div>
        </div>

    );
}