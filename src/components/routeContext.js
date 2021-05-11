import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {defaultCategory, defaultPriceRange, defaultSort, initialPage} from "./consts/default";
import {AppContext} from "./context/appContext";
import {Newsletter} from "./newsletter";
import {Navbar} from "./navbar";
import {Footer} from "./footer";
import {Shop} from "../steps/shop/shop";
import {Elements} from "../steps/elements/elements";
import {Checkout} from "../steps/checkout/checkout";
import {localStorageUtil} from "./storage/localStorage";
import {useMediaQuery} from 'react-responsive'

export const RouteContext = () => {
    const [sort, setSort] = useState(defaultSort);
    const [page, setPage] = useState(initialPage);
    const [category, setCategory] = useState(defaultCategory);
    const [priceRange, setPriceRange] = useState(defaultPriceRange);
    const basketData = localStorageUtil.getDataByKey('basket') || [];
    const [basket, setBasket] = useState(basketData);
    const isMobile = useMediaQuery({query: '(max-width: 992px)'});

    const combinedFilters = {
        isMobile,
        page, setPage,
        sort, setSort,
        basket, setBasket,
        category, setCategory,
        priceRange, setPriceRange
    };

    return (
        <AppContext.Provider value={combinedFilters}>
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
        </AppContext.Provider>
    )
};

