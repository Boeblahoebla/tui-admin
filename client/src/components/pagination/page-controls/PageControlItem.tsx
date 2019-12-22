// Imports
//////////

// Base dependencies
import React from "react";


// Typing
/////////

import { PageControlItemPropType } from "./types/PageControlItemTypes";


// Component
////////////

const PageControlItem = (props: PageControlItemPropType) => {

    // Fetch the icon-flag & action to be taken from the props
    const { icon, action } = props;

    // Generate the right icon & attach the action on Click
    let control;

    if(icon === 'begin') {
        control =  (
            <li className="page-item" onClick={() => action()}>
                <div className="page-link" aria-label="begin">
                    <i className="fas fa-fast-backward text-secondary"/>
                </div>
            </li>
        );
    } else if(icon === 'previous') {
        control = (
            <li className="page-item" onClick={() => action()}>
                <div className="page-link" aria-label="previous">
                    <i className="fas fa-backward text-secondary"/>
                </div>
            </li>
        );
    } else if(icon === 'next') {
        control= (
            <li className="page-item" onClick={() => action()}>
                <div className="page-link" aria-label="next">
                    <i className="fas fa-forward text-secondary"/>
                </div>
            </li>
        );
    } else {
        control = (
            <li className="page-item" onClick={() => action()}>
                <div className="page-link" aria-label="end">
                    <i className="fas fa-fast-forward text-secondary"/>
                </div>
            </li>
        );
    }

    return (
        <div>
            { control }
        </div>
    )
};


// Export
/////////

export default PageControlItem;

