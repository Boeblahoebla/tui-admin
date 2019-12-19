// Imports
//////////

// Base dependencies
import React, {useRef} from 'react';


// Typing
/////////

import {PageControlSearchPropType} from "./types/PageControlSearchTypes";


// Component
////////////

const PageControlSearch = (props: PageControlSearchPropType) => {

    // Fetch the selectPage function from the props
    const { selectPage } = props;

    // Issue an empty reference
    const inputEl:any = useRef(null);

    /******************
     * Event handlers *
     ******************/

    // On search click handler
    const onSearchClick = () => {
        if(inputEl) {
            if (inputEl.current.value) {
                selectPage(inputEl.current.value);

                // Clear the input value
                inputEl.current.value = '';
            }
        }

    };

    /*************************
     * End of event handlers *
     *************************/

    return (
        <li className="page-item d-flex ml-2 mr-2">
            {/* Attach the reference to the input field */}
            <input
                className="form-control form-control-sm"
                type="number"
                placeholder="Of ga naar pagina..."
                ref={inputEl}
                onKeyPress={event => {
                    event.key === 'Enter' && onSearchClick()
                }}
            />
            <button
                className="btn btn-sm btn-secondary"
                onClick={() => onSearchClick()}><i className="fas fa-search"/></button>
        </li>
    )
};


// Export
/////////

export default PageControlSearch;

