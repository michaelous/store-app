import React from 'react'

export const Tile = ({icon, header, subheader}) => {
    return (
        <div className={'delivery'}>
            <img alt={"icon"} className={"icon shipmentSign"} src={icon}/>
            <p className={"iconHeader"}>{header}</p>
            <p className={"iconSubheader"}>{subheader}</p>
        </div>
    )
};
