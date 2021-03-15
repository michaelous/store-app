import React, {useContext} from 'react';
import {FakeDescription} from "./consts/description";
import {FiltersContext} from "./AppContext";

export const ProductPopup = ({product, showPopup}) => {
    const {basket, setBasket} = useContext(FiltersContext);

    const cartHandler = (product) => {
        return (event) => {
            if (!basket.includes(product)) setBasket([...basket, product]);
            event.preventDefault();
        }
    };

    return (
        <div className={"popupWrapper"}>
            <div className={"productPopup"}>
                <img alt={"product"} src={product.image}/>
                <div className={"productDetails"}>
                    <p className={"productName"}>{product.name}</p>
                    <p className={"productPrice"}>{product.price}$</p>
                    <p className={"productCategory"}>{product.category}</p>
                    <p className={"productDescription"}>{FakeDescription}</p>
                    <button className={"addToCart"} onClick={cartHandler(product)}>Add To Cart</button>
                </div>
                <button className={"closePopup"} onClick={() => showPopup(false)}>X</button>
            </div>
        </div>
    )
};

