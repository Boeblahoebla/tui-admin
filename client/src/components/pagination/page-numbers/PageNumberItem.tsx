// Imports
//////////

// Base dependencies
import React from 'react';


// Typing
/////////

import { PageNumberItemPropType } from "./types/PageNumberItemTypes";


// Component
////////////

const PageNumberItem = (props: PageNumberItemPropType) => {

    const {pageNumber, active, selectPage} = props;

    // Generate the listItem as active or not
    let listItem;

    // Format the page number correctly
    let pageNumberText;
    if(pageNumber < 10) {
        pageNumberText = `0${pageNumber.toString()}`
    } else {
        pageNumberText = pageNumber.toString()
    }

    // Choose the right  listItem to return
    if(active) {
        listItem = <li className="page-item page-number">
            <div className="page-link page-link--active text-white" onClick={() => selectPage(pageNumber)}>{pageNumberText}</div></li>
    } else {
        listItem = <li className="page-item page-number"><div className="page-link page-link--passive text-secondary" onClick={() => selectPage(pageNumber)}>{pageNumberText}</div></li>
    }

    return (
        <div>
            {listItem}
        </div>

    )
};


// Export
/////////

export default PageNumberItem;

