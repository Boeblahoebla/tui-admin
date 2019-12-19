// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// Component
////////////

const UserItem = ({userName, email}) => {
    return (
        <tr>
            <td className="align-middle pt-0 pb-2 users__table-data"><img src={`https://robohash.org/${userName}${email}.png`} alt="Avatar" height="50px"/></td>
            <td className="align-middle users__table-data">{userName}</td>
            <td className="align-middle users__table-data">{email}</td>
        </tr>
    )
};


// Prop types for the component
UserItem.propTypes = {
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};


// Export
/////////

export default UserItem;