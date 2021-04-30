import React, {useState} from 'react'
import {FlexItem} from "./flexitem";
import {justify} from "./consts/FlexJustify";
import {align} from "./consts/FlexAlign";
import {direction} from "./consts/FlexDirection";
import {elementsContent} from "./consts/elementsContent";
import {perkData} from "./data/perks";
import {Perks} from "./perk";


export const Elements = () => {
    return (
        <FlexItem flexDirection={direction.COLUMN}
                  justify={justify.CENTER}
                  align={align.CENTER}
                  className={"elementsWrapper"}>
            <h1 className={"elementsHeader"}>Elements</h1>

            <div className={"perksSection"}>
                <p className={"flexItem perkHeader"}>image galleries and interactive features</p>
                <Perks data={perkData}/>
                <Perks data={perkData}/>
            </div>

            <div className={"elementsContent"}>
                {elementsContent.map((el, index) => {
                    return <div key={index} className={"element"}
                                style={{backgroundImage: `url(${el.image})`}}>
                        <div className={"textWrapper"}>
                            <p className={"elementHeader"}>{el.header}</p>
                            <p className={"elementSubheader"}>{el.subheader} </p>
                        </div>

                    </div>
                })}
            </div>
        </FlexItem>
    )
};
