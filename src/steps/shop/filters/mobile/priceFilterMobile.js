import React, {useContext} from "react";
import {FlexItem} from "../../../../components/global/flexitem";
import {AppContext} from "../../../../components/context/appContext";
import {direction} from "../../../../components/consts/FlexDirection";
import {justify} from "../../../../components/consts/FlexJustify";
import {align} from "../../../../components/consts/FlexAlign";

export const PriceFilterMobile = () => {
    const {priceRange, setPriceRange} = useContext(AppContext);
    const [min, max] = priceRange;

    const setMinPrice = (e) => {
        e.preventDefault();
        (!isNaN(e.target.value)) && setPriceRange([Number(e.target.value), max]);
    };

    const setMaxPrice = (e) => {
        e.preventDefault();
        (!isNaN(e.target.value)) && setPriceRange([min, Number(e.target.value)]);
    };

    return (
        <div className={"priceFilterContainer"}>
            <p className={"priceRange"}>Price range</p>
            <FlexItem className={"priceInputContainer"}
                      flexDirection={direction.ROW}
                      justifyContent={justify.SPACE_BETWEEN}
                      alignItems={align.CENTER}>
                <input onChange={setMinPrice} placeholder={"Min"}/>
                <input onChange={setMaxPrice} placeholder={"Max"}/>
            </FlexItem>
        </div>)
};