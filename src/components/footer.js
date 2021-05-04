import React from 'react';
import {justify} from "./consts/FlexJustify";
import {align} from "./consts/FlexAlign";
import {FlexItem} from "./flexitem";
import logo from "./images/maison.png";

export const Footer = () => {
    return <div className={"footerWrapper"}>
        <FlexItem justifyContent={justify.SPACE_BETWEEN}
                  alignItems={align.CENTER} className={"footer"}>
            <p className="copy"> 2021 Maison & All right reserved.</p>
            <ul className="footerNav">
                <li className="navItem">
                    <img className={"logo"} alt={"logo"} src={logo}/>
                </li>
            </ul>
        </FlexItem>
    </div>
}