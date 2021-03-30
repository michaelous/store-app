import React, {useState} from 'react';
import {defaultCategory, defaultPriceRange, defaultSort, initialPage} from "./consts/default";
import {FiltersContext} from "./AppContext";
import {Newsletter} from "./newsletter";
import {Navbar} from "./navbar";
import {Footer} from "./footer";
import {Shop} from "./shop";
import {Elements} from "./elements";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


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
        <>
            <FiltersContext.Provider value={combinedFilters}>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route path="/elements" component={Elements}/>
                        <Route path="/" component={Shop}/>
                    </Switch>
                </Router>
            </FiltersContext.Provider>

            <Newsletter/>
            <Footer/>
        </>
    )
};

