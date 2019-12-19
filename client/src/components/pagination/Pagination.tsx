// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import PageNumbers from './page-numbers/PageNumbers';
import PageControls from "./page-controls/PageControls";

// Styling
import './assets/styling/pagination.scss';


// Typing
/////////

import {PaginationPropType} from "./types/PaginationTypes";


// Component
////////////

const Pagination = (props: PaginationPropType) => {

    const { data, decrementPage, incrementPage, setPageEnd, setPageBegin, selectPage } = props

    let paginationContent = <></>;

    // Hide the controls when there is no data
    if (!data.data) {
        return (
            <div>{paginationContent}</div>
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
            {paginationContent}
        </div>
    )
};


// Prop types for the component
Pagination.propTypes = {
    data: PropTypes.object.isRequired,
    setPageEnd: PropTypes.func.isRequired,
    setPageBegin: PropTypes.func.isRequired,
    incrementPage: PropTypes.func.isRequired,
    decrementPage: PropTypes.func.isRequired,
    selectPage: PropTypes.func.isRequired
};


// Export
/////////

export default Pagination;