import React from 'react';
import {DesktopFilters} from "./filters/dekstop/desktopFilters";
import {MobileFilters} from "./filters/mobile/mobileFilters";

export const Filters = ({mobile}) => {
    return (
        <>
            {mobile ? <MobileFilters/> : <DesktopFilters/>}
        </>)
};