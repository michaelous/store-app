import React, {useEffect, useContext, useState} from 'react';
import {FlexItem} from "../../../components/global/flexitem";
import {direction} from "../../../components/consts/FlexDirection";
import {justify} from "../../../components/consts/FlexJustify";
import {align} from "../../../components/consts/FlexAlign";
import {AppContext} from "../../../components/context/appContext";
import {maxProductPerPage} from "../../../components/consts/default";
import {PageArrow} from "../../../components/styledComponents/pageArrow";

export const Pagination = ({items}) => {
    const {page, setPage} = useContext(AppContext);
    const [productsPerPage, setProductsPerPage] = useState(4);

    const getNumberOfPages = () => Math.ceil(items / maxProductPerPage);
    const previousPage = () => (page !== 1) && setPage(page - 1);
    const nextPage = () => (page < getNumberOfPages()) && setPage(page + 1);

    useEffect(() => {
        setProductsPerPage(getNumberOfPages);
        if (items <= 4) setPage(1);
    }, [items]);

    const pageHandler = (val) => {
        return (event) => {
            setPage(val);
            event.preventDefault();
        }
    };

    const pagination = () => {
        const moreThanOnePage = getNumberOfPages() > 1;
        return <ul className={"productsPagination"}>
            {moreThanOnePage && <PageArrow direction={'left'}
                                           disabled={page === 1}
                                           onClick={previousPage}/>}

            {[...Array(productsPerPage)].map((elementInArray, index) => (
                <li key={index} className={`page ${page === (index + 1) ? 'current' : ''}`}
                    onClick={pageHandler(index + 1)}> {index + 1} </li>
            ))}

            {moreThanOnePage && <PageArrow direction={'right'}
                                           disabled={page === getNumberOfPages()}
                                           onClick={nextPage}/>}
        </ul>
    };

    const paginationText = () => {
        return <p className={"paginationText"}>Showing {items} products</p>
    };

    return (<FlexItem className={`productsControls topControls`}
                      flexDirection={direction.ROW}
                      justifyContent={justify.SPACE_BETWEEN}
                      alignItems={align.CENTER}>
        {pagination()}
        {paginationText()}
    </FlexItem>)
};

