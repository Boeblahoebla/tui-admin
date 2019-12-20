// Imports
//////////

// Base dependencies
import React from "react";

// Redux
import { deleteUserAction } from "../../redux/actions/userActions";
import { connect } from "react-redux";

// Styling
import './assets/styling/admin.scss'

// Typing
/////////

import { UserAdminItemPropType } from "./types/UserAdminItem";
import { reduxFullState } from "../../ts-types/reduxStateTypes";


// Component
////////////

const UserAdminItem = (props: UserAdminItemPropType) => {

    // Fetch userName & email from the props
    const { userName, email, id, deleteUserAction, auth } = props;

    // Generate the removal functionality according to the logged in user
    const removeButton = (auth.user.name === userName)
        ? (
            <button className="btn admin__table-data__remove ml-2 mr-2" disabled>
                <i className="far fa-trash-alt"/>
            </button>
        )
        : (
            <button className="btn admin__table-data__remove ml-2 mr-2" onClick={() => {deleteUserAction(id)}}>
                <i className="far fa-trash-alt"/>
            </button>
        );

    return (
        <tr>
            <td className="align-middle pt-0 pb-2 admin__table-data">
                <img src={`https://robohash.org/${userName}${email}.png`} alt="Avatar" height="50px"/>
            </td>
            <td className="align-middle admin__table-data">
                { userName}
            </td>
            <td className="align-middle text-center">
                <button className="btn admin__table-data__edit ml-2 mr-2" >
                    <i className="far fa-edit"/>
                </button>

                { removeButton }
            </td>
        </tr>
    )
};


// Map the Redux state to props
const mapStateToProps = (state:reduxFullState) => ({
    user: state.user,
    auth: state.auth
});


// Export
/////////

export default connect(mapStateToProps, { deleteUserAction })(UserAdminItem);