import {localStorageUtil} from "../components/storage/localStorage";
import {productsHelper} from "../steps/shop/filters/productsHelper.js"

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const addProductToCart = (product, state) => {
    const updatedCart = [...state.cart];

    if (!productsHelper.itemInCart(product, updatedCart)) {
        updatedCart.push({...product, quantity: 1});
        localStorageUtil.updateBasket([...updatedCart])
    }

    return {...state, cart: updatedCart};
};

const removeProductFromCart = (product, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(item => item === product);

    updatedCart.splice(updatedItemIndex, 1);
    localStorageUtil.updateBasket(updatedCart)
    return {...state, cart: updatedCart};
};

export const shopReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.product, state);
        case REMOVE_PRODUCT:
            return removeProductFromCart(action.product, state);
        default:
            return state;
    }
};
