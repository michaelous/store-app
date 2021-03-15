import React, {useState} from 'react';
import {FlexItem} from "./flexitem";
import {justify} from "./consts/FlexJustify";
import {align} from "./consts/FlexAlign";
import {direction} from "./consts/FlexDirection";
import {FiltersContext} from "./AppContext";
import {sliderData} from "./consts/sliderData";
import {Filters} from "./filters";
import {Navbar} from "./navbar";
import {Slider} from "./slider";
import {Products} from "./products-container";
import {defaultCategory, defaultPriceRange, defaultSort, initialPage} from "./consts/default";

export const Wrapper = () => {
    const [sort, setSort] = useState(defaultSort);
    const [page, setPage] = useState(initialPage);
    const [basket, setBasket] = useState([]);
    const [category, setCategory] = useState(defaultCategory);
    const [priceRange, setPriceRange] = useState(defaultPriceRange);

    const combinedFilters = {
        page, setPage,
        sort, setSort,
        basket, setBasket,
        category, setCategory,
        priceRange, setPriceRange,
    };

    return (
        <FiltersContext.Provider value={combinedFilters}>
            <Navbar/>
            <Slider slides={sliderData}/>
            <FlexItem flexDirection={direction.ROW}
                      justifyContent={justify.SPACE_BETWEEN}
                      alignItems={align.FLEX_START}
                      className={'wrapperContainer'}>
                <Filters/>
                <Products/>
            </FlexItem>
        </FiltersContext.Provider>
    )
};

