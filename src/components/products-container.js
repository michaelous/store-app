import React, {useContext, useEffect, useState} from 'react';
import {direction} from "./consts/FlexDirection";
import {justify} from "./consts/FlexJustify";
import {align} from "./consts/FlexAlign";
import {FiltersContext} from "./AppContext";
import {maxProductPerPage} from "./consts/default";
import {filterByCategory, filterByPrice, sortItems} from "./filters/sortHelper";
import {getAllProducts} from "./consts/API";
import {ProductPopup} from "./product-popup";
import {Controls} from "./controls";
import {FlexItem} from "./flexitem";
import {localStorageUtil} from "./storage/localStorage";

export const Products = () => {
    const {category, sort, page, priceRange, basket} = useContext(FiltersContext);
    const [popup, showPopup] = useState(false);
    const [product, setProduct] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [animation, setAnimation] = useState(false);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((data) => {
            setAllProducts(data);
            setItems(data);
        });
    }, []);

    useEffect(() => {
        let byCategory = filterByCategory(allProducts, category);
        let byPrice = filterByPrice(byCategory, priceRange);
        let sortAll = sortItems(byPrice, sort);
        setItems(sortAll);
    }, [category, priceRange, sort]);


    const getProduct = (name) => {
        return items.filter((character) => character.name === name)[0];
    };

    const inCart = (item) => {
        return localStorageUtil.itemInBasket(item);
    };

    const productHandler = (name) => {
        return (event) => {
            showPopup(true);
            setProduct(getProduct(name));
            event.preventDefault();
        }
    };

    const paginate = (array, productsPerPage, page) => {
        return array.slice((page - 1) * productsPerPage, page * productsPerPage);
    };

    const onLoad = () => setLoaded(true);

    return (
        <div className={"productsWrapper"}>
            <Controls items={items.length}/>
            <FlexItem className={"productContainer"}
                      flexDirection={direction.ROW}
                      justifyContent={justify.FLEX_START}
                      alignItems={align.CENTER}>
                {paginate(items, maxProductPerPage, page).map((item, index) => {
                    return <div onClick={productHandler(item.name)}
                                className={`product ${inCart(item) ? 'inCart ' : ''}${animation ? 'loading' : ''}`}
                                key={index}>
                        <img onLoad={onLoad} alt={'product'} className={`productImg ${loaded ? 'showProduct' : ''}`}
                             src={item.image}/>
                        <p className={"productId"}>{item.id}</p>
                        <div className={"productDetails"}>
                            <p className={"productTitle"}>{item.name}</p>
                            <p className={"productPrice"}>${item.price}</p>
                        </div>
                    </div>
                })}
                {popup && <ProductPopup product={product}
                                        showPopup={showPopup}/>}
            </FlexItem>
            <Controls items={items.length}/>
        </div>
    )
};