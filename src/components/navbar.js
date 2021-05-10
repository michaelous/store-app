import React, {useContext, useState, useEffect} from 'react';
import cartImg from './images/cart.png'
import logo from './images/maison.png'
import {AppContext} from "./context/appContext";
import {NavLink} from "react-router-dom";
import {FlexItem} from "./flexitem";
import {MiniCart} from "./miniCart";

export const Navbar = () => {
    const url = 'https://michaelous.github.io/store-app';
    const [scroll, setScroll] = useState(false);
    const [cart, setCart] = useState(false);
    const {basket} = useContext(AppContext);
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
                    <a href={url}>
                        <img className={"logo"} alt={"logo"} src={logo}/>
                    </a>
                    <ul className={"navigation"}>
                        <NavLink className={"navItem"} exact to="/">shop</NavLink>
                        <NavLink className={"navItem"} exact to="/elements">elements</NavLink>
                        <li className={"navItem cartNavDetails"}>
                            <img className={"cartIcon"} alt={"cart"} onClick={showCart} src={cartImg}/>
                            <p className={"quantity"}>{quantity}</p>
                        </li>
                    </ul>
                </nav>
            </FlexItem>

            <MiniCart cart={cart}
                      setCart={setCart}/>
        </>
    )
};

