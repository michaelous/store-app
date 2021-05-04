import React, {useContext} from 'react';
import {localStorageUtil} from "./storage/localStorage";
import {FlexItem} from "./flexitem";
import {NavLink} from "react-router-dom";
import {FiltersContext} from "./AppContext";
import {justify} from "./consts/FlexJustify";
import {align} from "./consts/FlexAlign";

export const Cart = ({cart, setCart}) => {
    const {basket, setBasket} = useContext(FiltersContext);

    const removeHandler = (product) => {
        return (event) => {
            let remove = basket.filter((character) => character.name !== product);
            setBasket(remove, localStorageUtil.updateBasket(remove));
            event.preventDefault();
        }
    };

    const getTotal = () => {
        return basket.reduce((accelerator, item) => accelerator + item.price * 1, 0).toFixed(2);
    };

    const closeCart = () => setCart(false);

    return (
        <div className={cart ? 'cart-wrapper active' : 'cart-wrapper'}>
            <div className={"inside-cart"}>
                <button className={"closeCart"} onClick={closeCart}>x</button>
                <p className={"cartHeader"}>Your cart</p>

                {basket.map((value, index) => {
                    return <FlexItem key={index} className={"productCartWrapper"}
                                     alignItems={align.CENTER}
                                     justifyContent={justify.CENTER}>
                        <img alt={"product"} className={"productImgCart"} src={value.image}/>
                        <div className={"productDetails"}>
                            <p className={"productName"}>{value.name}</p>
                            <p className={"productQty"}>Quantity: 1</p>
                            <p className={"productPrice"}>${value.price}</p>
                            <button onClick={removeHandler(value.name)} className={"removeBtn"}>Remove
                            </button>
                        </div>
                    </FlexItem>
                })}

                <div className={"totalContainer"}>
                    <p className={"totalHeader"}>Subtotal: ${getTotal()}</p>
                    <NavLink className={"checkoutBtn"} exact to="/checkout">Go To Checkout</NavLink>
                </div>
            </div>
        </div>
    )
};

