import React from "react";
import "./Cart.css"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// export const CartSection = () => {
//     return (
//         <div className="cart">
//             <div className="heading" >
//                 <h3>Your basket is empty</h3>
//             </div>
//             <div classNameName="button" >
//                 <button classNameName='btn' > checkout </button>
//             </div>
//         </div>

//     );
// }


export const CartSection = () => {
    
    return (
        <div className="m-2 p-3 shadow rounded card border-0">
            {/* <div className="card rounded p-3 cart-list border-0"> */}
            <h4 className="my-order border-bottom pb-3">My Order</h4>
            <div className="menu-cart-list">
                <div className="item-detail-section border-bottom p-2 d-flex" style={{ flexDirection: 'column' }}>
                    <div className="item-detail">
                        <div className="item-quantity">1x </div>
                        <div className="item-data">
                            <div className="name-data">Patty Melt </div>
                            <div className="price-data">Rs 499</div>
                        </div>
                    </div>
                    <div className="remove-add pt-2 d-flex justify-content-end">
                        <div className="remove border rounded">
                            <AiOutlineMinus />
                        </div>
                        <div className="add border rounded">
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
                        <span>Rs 659</span>
                    </div>
                </div>
                <div className="checkout row px-3">
                    <button className="checkout-button"> Checkout</button>
                </div>
            </div>
            {/* </div> */}
            
        </div>
    );
}