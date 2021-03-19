import React, {useContext, useState, useEffect} from 'react';
import cartImg from './images/cart.png'
import logo from './images/maison.png'
import {FiltersContext} from "./AppContext";
import {FlexItem} from "./flexitem";
import {Cart} from "./cart";

export const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [cart, setCart] = useState(false);
    const {basket} = useContext(FiltersContext);
    const quantity = basket.length;
    const showCart = () => setCart(!cart);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            (window.scrollY > 20) ? setScroll(true) : setScroll(false);
        })
    });

    return (
        <>
            <FlexItem className={`navbarWrapper ${scroll ? ' scroll' : ''}`}>
                <nav className={"navbar"}>
                    <img className={"logo"} alt={"logo"} src={logo}/>
                    <ul className={"navigation"}>
                        <li className={"navItem"}>home</li>
                        <li className={"navItem"}>shop</li>
                        <li className={"navItem"}>elements</li>
                        <li className={"navItem cartNavDetails"}>
                            <img className={"cartIcon"} alt={"cart"} onClick={showCart} src={cartImg}/>
                            <p className={"quantity"}>{quantity}</p>
                        </li>
                    </ul>
                </nav>
            </FlexItem>

            <Cart cart={cart}
                  setCart={setCart}/>
        </>
    )
};

