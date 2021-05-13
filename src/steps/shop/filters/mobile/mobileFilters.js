import React from "react";
import {FlexItem} from "../../../../components/global/flexitem";
import {align} from "../../../../components/consts/FlexAlign";
import {justify} from "../../../../components/consts/FlexJustify";
import {direction} from "../../../../components/consts/FlexDirection";
import {SortFilter} from "../sort-filter";
import {CategoryMobile} from "./categoryMobile";
import {PriceFilterMobile} from "./priceFilterMobile";

export const MobileFilters = () => {
    return (
        <FlexItem alignItems={align.FLEX_START}
                  justifyContent={justify.SPACE_AROUND}
                  flexDirection={direction.ROW}
                  className={"sidebarMobile"}>
            <CategoryMobile/>
            <PriceFilterMobile/>
            <SortFilter/>
        </FlexItem>
    )
};



