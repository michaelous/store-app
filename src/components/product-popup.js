import React, {useContext} from 'react';
import {FakeDescription} from "./consts/description";
import {FiltersContext} from "./AppContext";
import {localStorageUtil} from "./storage/localStorage";

export const ProductPopup = ({product, showPopup}) => {
    const {basket, setBasket} = useContext(FiltersContext);

    const itemInCart = (item) => {
        return basket.some(({name}) => name === item.name);
    };

    const cartHandler = (product) => {
        return (event) => {
            if (!itemInCart(product)) {
                setBasket([...basket, product], localStorageUtil.updateBasket([...basket, product]));
                event.preventDefault();
            }
        }
    };

    return (
        <div className={"popupWrapper"}>
            <div className={"productPopup"}>
                <div className={"imgWrapper"}>
                    <img className={"imgPopup"} alt={"product"} src={product.image}/>
                </div>
                <div className={"productDetails"}>
                    <p className={"productName"}>{product.name}</p>
                    <p className={"productPrice"}>{product.price}$</p>
                    <p className={"productCategory"}>{product.category}</p>
                    <p className={"productDescription"}>{FakeDescription}</p>
                    <button className={`addToCart ${itemInCart(product) ? 'added' : ''}`}
                            onClick={cartHandler(product)}>{itemInCart(product) ? 'Added To Cart ' : 'Add To Cart'}</button>
                </div>
                <button className={"closePopup"} onClick={() => showPopup(false)}>X</button>
            </div>
        </div>
    )
};

