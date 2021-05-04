import React from 'react';
import {Slider} from "./slider";
import {mainSlider} from "./consts/mainSlider";
import {FlexItem} from "./flexitem";
import {direction} from "./consts/FlexDirection";
import {justify} from "./consts/FlexJustify";
import {align} from "./consts/FlexAlign";
import {Filters} from "./filters";
import {Products} from "./products-container";

export const Shop = () => {
    return (
        <>
            <Slider slides={mainSlider}/>
            <FlexItem flexDirection={direction.ROW}
                      justifyContent={justify.SPACE_BETWEEN}
                      alignItems={align.FLEX_START}
                      className={'wrapperContainer'}>
                <Filters/>
                <Products/>
            </FlexItem>
        </>
    )
};