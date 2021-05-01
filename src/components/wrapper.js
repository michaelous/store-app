import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {defaultCategory, defaultPriceRange, defaultSort, initialPage} from "./consts/default";
import {FiltersContext} from "./AppContext";
import {Newsletter} from "./newsletter";
import {Navbar} from "./navbar";
import {Footer} from "./footer";
import {Shop} from "./shop";
import {Elements} from "./elements";
import {Checkout} from "./checkout";
import {localStorageUtil} from "./storage/localStorage";


export const Wrapper = () => {
    const [sort, setSort] = useState(defaultSort);
    const [page, setPage] = useState(initialPage);
    const [category, setCategory] = useState(defaultCategory);
    const [priceRange, setPriceRange] = useState(defaultPriceRange);
    const basketData = localStorageUtil.getDataByKey('basket') || [];
    const [basket, setBasket] = useState(basketData);

    const combinedFilters = {
        page, setPage,
        sort, setSort,
        basket, setBasket,
        category, setCategory,
        priceRange, setPriceRange,
    };

    return (
        <FiltersContext.Provider value={combinedFilters}>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/elements" component={Elements}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/" component={Shop}/>
                </Switch>
            </Router>
            <Newsletter/>
            <Footer/>
        </FiltersContext.Provider>
    )
};

