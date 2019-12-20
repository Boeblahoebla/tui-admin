// Imports
//////////

// Base dependencies
import React from 'react';

// Components
import UserAdminItem from './UserAdminItem';


// Typing
/////////

import { reduxSingleUserState } from "../../ts-types/reduxStateTypes";
import { UsersTablePropType } from "./types/UsersAdminTable";


// Component
////////////

const UsersAdminTable = (props: UsersTablePropType) => {

    // Fetch data & auth from the props
    const { data } = props;

    // Generate the user items
    const userAdminItems = data.map((user:reduxSingleUserState, index:number) => (
        <UserAdminItem
            key={index} email={user.email} userName={user.name} id={user._id}
        />
    ));

    return (
        <div className="mt-4">
            <table className="table table-hover">
                <thead>
                <tr>
                    {/* Avatar, username & email */}
                    <th className="users__table-head">Avatar</th>
                    <th className="users__table-head">Username</th>
                    <th className="users__table-head text-center">Functionality</th>
                </tr>
                </thead>
                <tbody>
                    { userAdminItems }
                </tbody>
            </table>
        </div>
    )
};



// Export
/////////

export default UsersAdminTable;