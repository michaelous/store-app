import React, {useContext} from "react";
import {FiltersContext} from "../AppContext";

export const SortFilter = () => {
    const {sort, setSort} = useContext(FiltersContext);
    const OnSortChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <div className={"sortContainer"}>
            <p className={"sortHeader"}>Sort by:</p>
            <select defaultValue={sort} onChange={OnSortChange}>
                <option value="NAME">Name</option>
                <option value="PRICE">Price</option>
            </select>
        </div>)
}