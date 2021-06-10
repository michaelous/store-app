import React, {useState, useReducer} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {defaultCategory, defaultPriceRange, defaultSort, initialPage} from "../consts/default";
import {AppContext} from "../context/appContext";
import {Newsletter} from "./newsletter";
import {Navbar} from "./navbar";
import {Footer} from "./footer";
import {Shop} from "../../steps/shop/shop";
import {Elements} from "../../steps/elements/elements";
import {Checkout} from "../../steps/checkout/checkout";
import {localStorageUtil} from "../storage/localStorage";
import {useMediaQuery} from 'react-responsive'
import {shopReducer, ADD_PRODUCT, REMOVE_PRODUCT} from '../../store/reducers';

export const RouteContext = () => {
    const [sort, setSort] = useState(defaultSort);
    const [page, setPage] = useState(initialPage);
    const [category, setCategory] = useState(defaultCategory);
    const [priceRange, setPriceRange] = useState(defaultPriceRange);
    const isMobile = useMediaQuery({query: '(max-width: 992px)'});
    const basketData = localStorageUtil.getDataByKey('basket') || [];
    const initialState = {cart: basketData}
    const [cartState, dispatch] = useReducer(shopReducer, initialState);

    const addProductToCart = (product) => {
        dispatch({type: ADD_PRODUCT, product: product});
    };

    const removeProductFromCart = (product) => {
        dispatch({type: REMOVE_PRODUCT, product: product})
    };

    const combinedContext = {
        isMobile,
        page, setPage,
        sort, setSort,
        category, setCategory,
        priceRange, setPriceRange,
        basket: cartState.cart,
        addProductToCart,
        removeProductFromCart
    };

    return (
        <AppContext.Provider value={combinedContext}>
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

