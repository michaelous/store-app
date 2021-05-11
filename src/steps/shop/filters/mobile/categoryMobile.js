import React, {useContext} from "react";
import {categories} from "../../../../components/consts/categories";
import {AppContext} from "../../../../components/context/appContext";

export const CategoryMobile = () => {
    const {category, setCategory} = useContext(AppContext);

    const OnSortChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className={"categoryContainer"}>
            <p className={"sidebarHeader"}>Categories</p>
            <ul className={"categories"}>
                <select defaultValue={category} onChange={OnSortChange}>
                    {categories.map((value, index) => (
                        <option key={index}
                                defaultValue={category}>{value}</option>
                    ))}
                </select>
            </ul>
        </div>
    )
};




