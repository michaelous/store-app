import React, {useContext} from "react";
import {AppContext} from "../../../components/context/appContext";

export const SortFilter = () => {
    const {sort, setSort} = useContext(AppContext);

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