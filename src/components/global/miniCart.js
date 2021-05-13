import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AppContext} from "../context/appContext";
import {productsHelper} from "../../steps/shop/filters/productsHelper";
import {ProductCart} from "./productCart";

export const MiniCart = ({cart, setCart}) => {
    const {basket} = useContext(AppContext);
    const closeCart = () => setCart(false);

    return (
        <div className={cart ? 'cart-wrapper active' : 'cart-wrapper'}>
            <div className={"inside-cart"}>
                <button className={"closeCart"} onClick={closeCart}>x</button>
                <p className={"cartHeader"}>Your cart</p>
                {basket.map((value, index) => {
                    return <ProductCart product={value}
                                        index={index}
                                        key={index}/>
                })}
                <div className={"totalContainer"}>
                    <p className={"totalHeader"}>Subtotal: ${productsHelper.totalPrice(basket)}</p>
                    <NavLink className={"checkoutBtn"} exact to="/checkout">Go To Checkout</NavLink>
                </div>
            </div>
        </div>
    )
};

