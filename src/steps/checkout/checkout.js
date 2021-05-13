import React, {useContext} from 'react'
import {FlexItem} from "../../components/global/flexitem";
import {justify} from "../../components/consts/FlexJustify";
import {align} from "../../components/consts/FlexAlign";
import {direction} from "../../components/consts/FlexDirection";
import {AppContext} from "../../components/context/appContext";
import {Payment} from "./payment";
import {ProductCart} from "../../components/global/productCart";

export const Checkout = () => {
    const {basket} = useContext(AppContext);

    return (
        <FlexItem flexDirection={direction.COLUMN}
                  justifyContent={justify.CENTER}
                  alignItems={align.CENTER}
                  className={"checkoutWrapper"}>
            <h1 className={"checkoutHeader"}>Checkout</h1>
            <div className={"checkoutInner"}>
                <div className={"checkoutProductList"}>
                    {basket.map((value, index) => {
                        return <ProductCart product={value}
                                            index={index}
                                            key={index}/>
                    })}
                </div>
                <Payment/>
            </div>
        </FlexItem>
    )
};
