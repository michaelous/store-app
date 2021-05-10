import React, {useContext} from 'react'
import {FlexItem} from "../../components/flexitem";
import {justify} from "../../components/consts/FlexJustify";
import {align} from "../../components/consts/FlexAlign";
import {direction} from "../../components/consts/FlexDirection";
import {localStorageUtil} from "../../components/storage/localStorage";
import close from "../../components/images/x.png";
import {AppContext} from "../../components/context/appContext";
import {Payment} from "./payment";


export const Checkout = () => {
    const {basket, setBasket} = useContext(AppContext);

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
