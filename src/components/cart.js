import React, {useContext} from 'react';
import {FiltersContext} from "./AppContext";
import {FlexItem} from "./flexitem";
import {justify} from "./consts/FlexJustify";
import {align} from "./consts/FlexAlign";

export const Cart = ({cart, setCart}) => {
    const {basket, setBasket} = useContext(FiltersContext);

    const removeHandler = (product) => {
        return (event) => {
            let remove = basket.filter((character) => character.name !== product);
            event.preventDefault();
            setBasket(remove);
        }
    };

    const getTotal = () => {
        let sum = 0;
        basket.map((product) => sum += product.price * 1);
        return '$' + sum.toFixed(2);
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
                    <p className={"totalHeader"}>Subtotal: {getTotal()}</p>
                </div>
            </div>
        </div>
    )
};

