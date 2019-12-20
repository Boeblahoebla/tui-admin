// Imports
//////////

// Base dependencies
import React from "react";

// Components
import UserItem from "./UserItem";


// Typing
/////////

import { reduxSingleUserState } from "../../ts-types/reduxStateTypes";
import { UsersTablePropType } from "./types/UsersTable";


// Component
////////////

const UsersTable = (props: UsersTablePropType) => {

    // Fetch data & auth from the props
    const { data } = props;

    // Generate the user items
    const userItems = data.map((user:reduxSingleUserState, index) => (
        <UserItem
            key={index} email={user.email} userName={user.name}
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
                    <th className="users__table-head">E-mail</th>
                </tr>
                </thead>
                <tbody>
                    { userItems }
                </tbody>
            </table>
        </div>
    )
};


// Export
/////////

export default UsersTable;