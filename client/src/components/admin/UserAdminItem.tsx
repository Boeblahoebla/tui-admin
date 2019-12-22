// Imports
//////////

// Base dependencies
import React, { useState } from "react";

// Redux
import { deleteUserAction } from "../../redux/actions/userActions";
import { connect } from "react-redux";

// Components
import UserAdminModal from "./UserAdminModal";

// Styling
import './assets/styling/admin.scss'

// Typing
/////////

import { UserAdminItemPropType } from "./types/UserAdminItem";
import { reduxFullState } from "../../ts-types/reduxStateTypes";
import {clearErrorsAction} from "../../redux/actions/errorActions";


// Component
////////////

const UserAdminItem = (props: UserAdminItemPropType) => {

    // Fetch userName & email from the props
    const { userName, email, id, deleteUserAction, auth, clearErrorsAction } = props;

    // State handling
    const [modalOpen, setModalOpen] = useState(false);

    console.log(auth);

    // Generate the removal functionality according to the logged in user
    const removeButton = (auth.user.email === email)
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

    // Modal toggler
    const toggleModal = () => {
        clearErrorsAction();
        setModalOpen(!modalOpen);
    };

    return (
        <>
            <tr>
                <td className="align-middle pt-0 pb-2 admin__table-data">
                    <img src={`https://robohash.org/${userName}${email}.png`} alt="Avatar" height="50px"/>
                </td>
                <td className="align-middle admin__table-data">
                    { userName}
                </td>
                <td className="align-middle text-center">
                    <button className="btn admin__table-data__edit ml-2 mr-2" onClick={() => toggleModal()}>
                        <i className="far fa-edit"/>
                    </button>

                    { removeButton }
                </td>
            </tr>

            <UserAdminModal userName={userName} email={email} id={id} modalOpen={modalOpen} toggleModal={toggleModal}/>
        </>
    )
};


// Map the Redux state to props
const mapStateToProps = (state:reduxFullState) => ({
    user: state.user,
    auth: state.auth
});


// Export
/////////

export default connect(mapStateToProps, { deleteUserAction, clearErrorsAction })(UserAdminItem);