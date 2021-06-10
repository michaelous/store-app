import React, {useContext} from 'react';
import {FakeDescription} from "../../../components/consts/description";
import {AppContext} from "../../../components/context/appContext";
import {CloseBtn} from "../../../components/styledComponents/closeButton";
import {productsHelper} from "../filters/productsHelper";

export const ProductPopup = ({product, showPopup}) => {
    const {basket, addProductToCart} = useContext(AppContext);

    const cartHandler = (product) => {
        addProductToCart(product);
    };

    const itemInCart = (product) => {
        return productsHelper.itemInCart(product, basket);
    }

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
                            onClick={() => cartHandler(product)}>
                        {itemInCart(product) ? 'Added To MiniCart ' : 'Add To MiniCart'}
                    </button>
                </div>
                <CloseBtn size={'large'} onClick={() => showPopup(false)}>X</CloseBtn>
            </div>
        </div>
    )
};

