import React, {useContext} from 'react';
import {localStorageUtil} from "../storage/localStorage";
import {FlexItem} from "./flexitem";
import {AppContext} from "../context/appContext";
import {justify} from "../consts/FlexJustify";
import {align} from "../consts/FlexAlign";
import {RemoveBtn} from "../styledComponents/removeButton";

export const ProductCart = ({product, index}) => {
    const {basket, setBasket} = useContext(AppContext);

    const removeHandler = (product) => {
        return (event) => {
            let remove = basket.filter((character) => character.name !== product);
            setBasket(remove, localStorageUtil.updateBasket(remove));
            event.preventDefault();
        }
    };

    return (<FlexItem key={index} className={"productCartWrapper"}
                      alignItems={align.CENTER}
                      justifyContent={justify.SPACE_AROUND}>
            <img alt={"product"} className={"productImgCart"} src={product.image}/>
            <div className={"productDetails"}>
                <p className={"productName"}>{product.name}</p>
                <p className={"productQty"}>Quantity: 1</p>
                <p className={"productPrice"}>${product.price}</p>
                <RemoveBtn onClick={removeHandler(product.name)}>Remove</RemoveBtn>
            </div>
        </FlexItem>
    )
};

