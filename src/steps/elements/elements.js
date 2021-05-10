import React from 'react'
import {FlexItem} from "../../components/flexitem";
import {justify} from "../../components/consts/FlexJustify";
import {align} from "../../components/consts/FlexAlign";
import {direction} from "../../components/consts/FlexDirection";
import {elementsContent} from "./elementsContent";
import {perkData} from "./perks";
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
