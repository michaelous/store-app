import React, {useContext} from 'react'
import {FlexItem} from "./flexitem";
import {justify} from "./consts/FlexJustify";
import {align} from "./consts/FlexAlign";
import {direction} from "./consts/FlexDirection";
import {localStorageUtil} from "./storage/localStorage";
import close from "./images/x.png";
import {FiltersContext} from "./AppContext";
import {Payment} from "./payment";

export const Checkout = () => {
    const {basket, setBasket} = useContext(FiltersContext);

    const removeHandler = (product) => {
        return (event) => {
            let remove = basket.filter((character) => character.name !== product);
            setBasket(remove, localStorageUtil.updateBasket(remove));
            event.preventDefault();
        }
    };

    return (
        <FlexItem flexDirection={direction.COLUMN}
                  justify={justify.CENTER}
                  align={align.CENTER}
                  className={"checkoutWrapper"}>
            <h1 className={"checkoutHeader"}>Checkout</h1>

            <div className={"checkoutInner"}>
                <div className={"checkoutProductList"}>
                    {basket.map((value, index) => {
                        return <FlexItem key={index} className={"product"}
                                         alignItems={align.FLEX_START}
                                         flexDirection={direction.ROW}
                                         justifyContent={justify.SPACE_BETWEEN}>
                            <img alt={"product"} className={"productImgCart"} src={value.image}/>
                            <div className={"productDetails"}>
                                <p className={"productName"}>{value.name}</p>
                                <p className={"productPrice"}>${value.price} per Item</p>
                            </div>
                            <p className={"priceFinal"}>{value.price}$</p>
                            <button onClick={removeHandler(value.name)} className={"deleteProduct"}>
                                <img alt={"icon"} className={"icon"} src={close}/>
                            </button>
                        </FlexItem>
                    })}
                </div>

                <Payment/>
            </div>
        </FlexItem>
    )
};
