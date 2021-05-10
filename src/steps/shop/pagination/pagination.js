import React, {useEffect, useContext, useState} from 'react';
import {FlexItem} from "../../../components/flexitem";
import {direction} from "../../../components/consts/FlexDirection";
import {justify} from "../../../components/consts/FlexJustify";
import {align} from "../../../components/consts/FlexAlign";
import {AppContext} from "../../../components/context/appContext";
import {maxProductPerPage} from "../../../components/consts/default";
import arrow from "../../../components/images/arrow.svg"

export const Pagination = (quantity) => {
    const {page, setPage} = useContext(AppContext);
    const [productsPerPage, setProductsPerPage] = useState(4);

    const getNumberOfPages = () => {
        return Math.ceil(quantity.items / maxProductPerPage);
    };

    useEffect(() => {
        setProductsPerPage(getNumberOfPages);
        if (quantity.items <= 4) setPage(1);
    }, [quantity.items]);

    const pageHandler = (val) => {
        return (event) => {
            setPage(val);
            event.preventDefault();
        }
    };

    const nextPage = () => {
        if (page < getNumberOfPages()) setPage(page + 1);
    };

    const previousPage = () => {
        if (page !== 1) setPage(page - 1);
    };

    const pagination = () => {
        const moreThanOnePage = getNumberOfPages() > 1;
        return <ul className={"productsPagination"}>
            {moreThanOnePage &&
            <img className={`arrowControl arrowLeft ${page === 1 ? 'inactive' : ''}`}
                 onClick={previousPage}
                 src={arrow}
                 alt={"arrow"}/>}

            {[...Array(productsPerPage)].map((elementInArray, index) => (
                <li key={index} className={`page ${page === (index + 1) ? 'current' : ''}`}
                    onClick={pageHandler(index + 1)}> {index + 1} </li>
            ))}

            {moreThanOnePage &&
            <img className={`arrowControl arrowRight ${page === getNumberOfPages() ? 'inactive' : ''}`}
                 onClick={nextPage}
                 src={arrow}
                 alt={"arrow"}/>}
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

