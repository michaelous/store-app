import React, {useContext, useEffect, useState} from 'react';
import {direction} from "../../../components/consts/FlexDirection";
import {justify} from "../../../components/consts/FlexJustify";
import {align} from "../../../components/consts/FlexAlign";
import {AppContext} from "../../../components/context/appContext";
import {maxProductPerPage} from "../../../components/consts/default";
import {productsHelper} from "../filters/productsHelper";
import {getAllProducts} from "../../../components/consts/API";
import {ProductPopup} from "./product-popup";
import {Pagination} from "../pagination/pagination";
import {FlexItem} from "../../../components/global/flexitem";

export const Products = () => {
    const {page, basket, sort, category, priceRange} = useContext(AppContext);
    const [popup, showPopup] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);
    const [items, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((data) => {
            setAllProducts(data);
            setProducts(productsHelper.filterProducts(data, category, priceRange, sort));
        });
    }, []);

    useEffect(() => {
        setProducts(productsHelper.filterProducts(allProducts, category, priceRange, sort));
    }, [category, priceRange, sort]);

    const getProduct = (name) => {
        return items.filter((character) => character.name === name)[0];
    };

    const inCart = (item) => {
        return basket.some(({name}) => name === item.name);
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
            <Pagination items={items.length}/>
            <FlexItem className={"productContainer"}
                      flexDirection={direction.ROW}
                      justifyContent={justify.CENTER}
                      alignItems={align.CENTER}>
                {paginate(items, maxProductPerPage, page).map((item, index) => {
                    return <div onClick={productHandler(item.name)}
                                className={`product ${inCart(item) ? 'inCart ' : ''}`} key={index}>
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
            <Pagination items={items.length}/>
        </div>
    )
};