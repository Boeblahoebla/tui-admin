// Imports
//////////

// Base dependencies
import React from 'react';

// Components
import PageControlItem from './PageControlItem';
import PageControlSearch from './PageControlSearch';

// Typing
/////////

import {PageControlsPropType} from "./types/PageControlsTypes";


// Component
////////////

const PageControls = (props: PageControlsPropType) => {

    // Fetch the functionality from the props
    const { decrementPage, incrementPage, setPageEnd, setPageBegin, selectPage } = props;

    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation">
                <ul className="pagination pagination-sm">

                    <PageControlItem icon="begin" action={setPageBegin}/>
                    <PageControlItem icon="previous" action={decrementPage}/>

                    <PageControlSearch selectPage={selectPage}/>

                    <PageControlItem icon="next" action={incrementPage}/>
                    <PageControlItem icon="end" action={setPageEnd}/>
                </ul>
            </nav>
        </div>
    )
};


// Export
/////////

export default PageControls;