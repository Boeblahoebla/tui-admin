// Imports
//////////

// Base dependencies
import React from "react";


// Typing
/////////

import { UserItemPropType } from "./types/UserItem";


// Component
////////////

const UserItem = (props: UserItemPropType) => {

    // Fetch userName & email from the props
    const { userName, email } = props;

    return (
        <tr>
            <td className="align-middle pt-0 pb-2 users__table-data"><img src={`https://robohash.org/${userName}${email}.png`} alt="Avatar" height="50px"/></td>
            <td className="align-middle users__table-data">{ userName} </td>
            <td className="align-middle users__table-data">{ email }</td>
        </tr>
    )
};


// Export
/////////

export default UserItem;