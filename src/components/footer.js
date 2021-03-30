import React from 'react';
import {justify} from "./consts/FlexJustify";
import {align} from "./consts/FlexAlign";
import {FlexItem} from "./flexitem";

export const Footer = () => {
    return <div className={"footerWrapper"}>
        <FlexItem justifyContent={justify.SPACE_BETWEEN}
                  alignItems={align.CENTER} className={"footer"}>
            <p className="copy"> 2021 Maison & All right reserved.</p>
            <ul className="footerNav">
                <li className="navItem">XD</li>
            </ul>
        </FlexItem>
    </div>
}