import React, {useContext} from 'react';
import {AppContext} from "../../components/context/appContext";
import {justify} from "../../components/consts/FlexJustify";
import {direction} from "../../components/consts/FlexDirection";
import {FlexItem} from "../../components/global/flexitem";
import shipmentSign from "../../components/images/delivery.png";
import returnSign from "../../components/images/return.png";
import {productsHelper} from "../shop/filters/productsHelper";
import {Tile} from "./tile.js";
import {Form} from "./react-form";


export const Payment = () => {
    const {basket} = useContext(AppContext);

    return (
        <div className={"paymentFinal"}>
            <Tile icon={shipmentSign} header={'Free Standard Delivery'}
                  subheader={'Faster delivery available to most countries'}/>
            <Tile icon={returnSign} header={'Easy returns'} subheader={'Send it back within 14 days'}/>

            <div className={"total"}>
                <p className={"totalHeader"}>total</p>
                <FlexItem className={"sub-total"} flexDirection={direction.ROW}
                          justifyContent={justify.SPACE_BETWEEN}>
                    <p>sub-total</p>
                    <p>${productsHelper.totalPrice(basket)}</p>
                </FlexItem>

                <FlexItem className={"delivery-option"} flexDirection={direction.ROW}
                          justifyContent={justify.SPACE_BETWEEN}>
                    <p>delivery</p>
                    <p>free</p>
                </FlexItem>

                <Form/>

                {/*<p className={"acceptedPayments"}>We Accept</p>*/}
                {/*<img className={'visa'} alt={'payments'} src={payment}/>*/}
            </div>
        </div>
    )
};
