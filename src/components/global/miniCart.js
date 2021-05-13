import React, {useContext, useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {AppContext} from "../context/appContext";
import {productsHelper} from "../../steps/shop/filters/productsHelper";
import {ProductCart} from "./productCart";

export const MiniCart = ({cart, setCart}) => {
    const {basket} = useContext(AppContext);
    const [linkDisabled, setDisabled] = useState(true);
    const closeCart = () => setCart(false);

    useEffect(() => {
        ((basket.length) > 0) ? setDisabled(false) : setDisabled(true);
    }, [basket.length]);

    const cartHeader = () => {
        return <>
            {linkDisabled && <div>
                <p className={"cartHeader"}>Your cart is empty</p>
                <span className={"shrugEmoji"}>¯\_(ツ)_/¯</span>
            </div>}
            {!linkDisabled && <p className={"cartHeader"}>Your cart</p>}
        </>
    };

    return (
        <div className={cart ? 'cart-wrapper active' : 'cart-wrapper'}>
            <div className={"inside-cart"}>
                <button className={"closeCart"} onClick={closeCart}>x</button>
                {cartHeader()}
                {basket.map((value, index) => {
                    return <ProductCart product={value}
                                        index={index}
                                        key={index}/>
                })}
                <div className={"totalContainer"}>
                    <p className={"totalHeader"}>Subtotal: ${productsHelper.totalPrice(basket)}</p>
                    <NavLink className={`checkoutBtn ${linkDisabled ? ' disabled' : ''}`}
                             exact to="/checkout">{linkDisabled ? 'Add something to cart' : 'Go To Checkout'}</NavLink>
                </div>
            </div>
        </div>
    )
};

