import React from 'react';
import {FlexItem} from "./flexitem";
import {align} from "./consts/FlexAlign";
import {justify} from "./consts/FlexJustify";
import {direction} from "./consts/FlexDirection";
import 'rc-slider/assets/index.css';
import {PriceFilter} from "./filters/price-filter";
import {SortFilter} from "./filters/sort-filter";
import {CategoryContainer} from "./filters/categories";

export const Filters = () => {
    return (
        <FlexItem alignItems={align.FLEX_START}
                  justifyContent={justify.FLEX_START}
                  flexDirection={direction.COLUMN}
                  className={"sidebar"}>
            <CategoryContainer/>
            <PriceFilter/>
            <SortFilter/>
        </FlexItem>
    )
};