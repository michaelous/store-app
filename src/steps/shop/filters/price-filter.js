import React, {useContext} from "react";
import Slider, {createSliderWithTooltip} from "rc-slider";
import {AppContext} from "../../../components/context/appContext";

export const PriceFilter = () => {
    const {priceRange, setPriceRange} = useContext(AppContext);
    const Range = createSliderWithTooltip(Slider.Range);

    const HandlePriceChange = (price) => {
        setPriceRange(price)
    };

    return (
        <div className={"priceFilterContainer"}>
            <p className={"priceHeader"}>Filter by</p>
            <p className={"priceRange"}>Price range</p>
            <Range min={0}
                   max={300}
                   defaultValue={priceRange}
                   onAfterChange={HandlePriceChange}
                   tipFormatter={value => `${value} USD`}
            />
        </div>)
}