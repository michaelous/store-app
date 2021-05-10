import React from 'react';
import {FlexItem} from "../../components/flexitem";
import {align} from "../../components/consts/FlexAlign";
import {justify} from "../../components/consts/FlexJustify";
import {direction} from "../../components/consts/FlexDirection";
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