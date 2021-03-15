import React, {useState} from 'react';
import {FlexItem} from "./flexitem";
import {direction} from "./consts/FlexDirection";
import {justify} from "./consts/FlexJustify";
import gift from "./images/gift.svg"

export const Newsletter = () => {
    const [email] = useState();

    const popupHandler = (email) => {
        return (event) => {
            event.preventDefault();
        }
    };

    return <div className="newsletterContainer">
        <FlexItem flexDirection={direction.ROW} justifyContent={justify.SPACE_BETWEEN}
                  className="newsletterBox">
            <p className="discount">Get Discount 35% off</p>
            <form className="inputContainer">
                <input className="newsletterEmail" id="email" placeholder="Your email"/>
                <button onClick={popupHandler('test')} type="button" id="send" className="newsletterSubmit">Send
                </button>
            </form>
        </FlexItem>

        {email && <div className={"newsletterPopup"}>
            <p className={"popupText"}>Thank You User!</p>
            <p className={"popupText"}>Check Out Your EmailBox</p>
            <img alt={"gift"} src={gift} className="gift"/>
            <button className={"closePopup"}>x</button>
        </div>}
    </div>

}