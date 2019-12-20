// Imports
//////////

// Base dependencies
import React from "react";

// Components
import PageNumbers from "./page-numbers/PageNumbers";
import PageControls from "./page-controls/PageControls";

// Styling
import "./assets/styling/pagination.scss";


// Typing
/////////

import { PaginationPropType } from "./types/PaginationTypes";


// Component
////////////

const Pagination = (props: PaginationPropType) => {

    // Fetch the properties from the props
    const { data, decrementPage, incrementPage, setPageEnd, setPageBegin, selectPage } = props;

    // Issue a placeholder for the paginationContent
    let paginationContent = <></>;

    // Hide the controls when there is no data
    if (!data.data) {
        return (
            <div>{ paginationContent }</div>
        )
    }

    // Generate the pagination content
    paginationContent = (
        <div className="mb-2">
            <PageNumbers
                currentPage={data.currentPage}
                pages={data.pages}
                selectPage={selectPage}
            />
            <PageControls
                decrementPage={decrementPage}
                incrementPage={incrementPage}
                setPageBegin={setPageBegin}
                setPageEnd={setPageEnd}
                selectPage={selectPage}/>
        </div>
    );

    return (
        <div>
            { paginationContent }
        </div>
    )
};


// Export
/////////

export default Pagination;