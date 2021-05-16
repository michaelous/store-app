import React, {useContext} from "react";
import {categories} from "../../../components/consts/categories";
import {AppContext} from "../../../components/context/appContext";

export const CategoryContainer = () => {
    const {category, setCategory} = useContext(AppContext);

    const categoryHandler = (value) => {
        return (event) => {
            setCategory(value);
            event.preventDefault();
        }
    };

    return (
        <div className={"categoryContainer"}>
            <p className={"sidebarHeader"}>Categories</p>
            <ul className={"categories"}>
                {categories.map((value, index) => {
                    return <li key={index}
                               className={`category ${category === value ? 'active' : ''}`}
                               onClick={categoryHandler(value)}>{value} </li>
                })}
            </ul>
        </div>
    )
};