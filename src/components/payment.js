import React from 'react'
import {justify} from "./consts/FlexJustify";
import {direction} from "./consts/FlexDirection";
import {FlexItem} from "./flexitem";
import shipmentSign from "./images/delivery.png";
import returnSign from "./images/return.png";
import payment from "./images/pay.png";
import {Tile} from "./tile.js";


export const Payment = () => {
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
                    <p>$1235</p>
                </FlexItem>

                <FlexItem className={"delivery-option"} flexDirection={direction.ROW}
                          justifyContent={justify.SPACE_BETWEEN}>
                    <p>delivery</p>
                    <p>free</p>
                </FlexItem>
                <button className={"checkoutBtn"}>CHECKOUT</button>
                <p className={"acceptedPayments"}>We Accept</p>
                <img className={'visa'} alt={'payments'} src={payment}/>
            </div>
        </div>
    )
};
