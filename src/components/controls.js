import React, {useEffect, useContext, useState} from 'react';
import {FlexItem} from "./flexitem";
import {direction} from "./consts/FlexDirection";
import {justify} from "./consts/FlexJustify";
import {align} from "./consts/FlexAlign";
import {FiltersContext} from "./AppContext";
import {maxProductPerPage} from "./consts/default";

export const Controls = (quantity) => {
    const {page, setPage} = useContext(FiltersContext);
    const [productsPerPage, setProductsPerPage] = useState(4);

    useEffect(() => {
        setProductsPerPage(getNumberOfPages);
        if (quantity.items <= 4) setPage(1);
    }, [quantity.items]);

    const getNumberOfPages = () => {
        return Math.ceil(quantity.items / maxProductPerPage);
    };

    const pageHandler = (val) => {
        return (event) => {
            setPage(val);
            event.preventDefault();
        }
    };

    const pagination = () => {
        return <ul className={"productsPagination"}>
            {[...Array(productsPerPage)].map((elementInArray, index) => (
                <li key={index} className={`page ${page === (index + 1) ? 'current' : ''}`}
                    onClick={pageHandler(index + 1)}> {index + 1} </li>
            ))}
        </ul>
    };

    const paginationText = () => {
        return <p className={"paginationText"}>Showing {quantity.items} products</p>
    };

    return (<FlexItem className={`productsControls topControls`}
                      flexDirection={direction.ROW}
                      justifyContent={justify.SPACE_BETWEEN}
                      alignItems={align.CENTER}>
        {pagination()}
        {paginationText()}
    </FlexItem>)
};

