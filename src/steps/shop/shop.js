import React, {useContext} from 'react';
import {Slider} from "./slider/slider";
import {sliderData} from "./slider/sliderData";
import {AppContext} from "../../components/context/appContext";
import {FlexItem} from "../../components/global/flexitem";
import {direction} from "../../components/consts/FlexDirection";
import {justify} from "../../components/consts/FlexJustify";
import {align} from "../../components/consts/FlexAlign";
import {Filters} from "./filters";
import {Products} from "./products/products-container";

export const Shop = () => {
    const {isMobile} = useContext(AppContext);

    return (
        <>
            <Slider slides={sliderData}/>
            <FlexItem flexDirection={isMobile ? direction.COLUMN : direction.ROW}
                      justifyContent={justify.SPACE_BETWEEN}
                      alignItems={align.FLEX_START}
                      className={'wrapperContainer'}>
                <Filters mobile={isMobile}/>
                <Products/>
            </FlexItem>
        </>
    )
};