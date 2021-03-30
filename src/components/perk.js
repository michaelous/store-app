import React from 'react';

export const Perks = ({data}) => {
    return <ul className={"perksList flexItem"}>
        {data.map((perk, index) => {
            return <li className={"perk"} key={index}>{perk.item}</li>
        })}
    </ul>
};
