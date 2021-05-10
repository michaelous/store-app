import React from 'react';
import {Slider} from "./slider/slider";
import {sliderData} from "./slider/sliderData";
import {FlexItem} from "../../components/flexitem";
import {direction} from "../../components/consts/FlexDirection";
import {justify} from "../../components/consts/FlexJustify";
import {align} from "../../components/consts/FlexAlign";
import {Filters} from "./filters";
import {Products} from "./products/products-container";

export const Shop = () => {
    return (
        <>
            <Slider slides={sliderData}/>
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