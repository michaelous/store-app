import React from "react";
import {CategoryContainer} from "../categories";
import {PriceFilter} from "../price-filter";
import {SortFilter} from "../sort-filter";
import {align} from "../../../../components/consts/FlexAlign";
import {justify} from "../../../../components/consts/FlexJustify";
import {direction} from "../../../../components/consts/FlexDirection";
import {FlexItem} from "../../../../components/flexitem";

export const DesktopFilters = () => {
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



