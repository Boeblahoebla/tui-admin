// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

// Redux
import { connect } from "react-redux";
import { updateUserAction } from "../../redux/actions/userActions";

// Components
import { TextFieldGroup } from "../common/TextFieldGroup";

// ReactStrap
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


// Typing
/////////

import { reduxFullState } from "../../ts-types/reduxStateTypes";


// Dead Modal
/////////////

const UserAdminModal = (props:any) => {

    // Fetch the data from the props
    const { userName, email, id, modalOpen, toggleModal, error } = props;

    // Fetch the history
    let history = useHistory();

    // State handling
    const [newUserName, setNewUserName] = useState("");

    // Set the state through the props
    useEffect(() => {
        setNewUserName(props.userName);
        if(modalOpen) {
            toggleModal();
        }
    },[props.userName]);

    return (
        <Modal isOpen={ modalOpen } toggle={ () => toggleModal(!modalOpen) } backdrop="static">

            {/* Modal Header */}
            <ModalHeader toggle={ () => toggleModal(!modalOpen) }>
                <span className="modalHeader">Change the username</span>
            </ModalHeader>

            {/* Modal body */}
            <ModalBody>
                <div className="d-flex justify-content-center mb-4">
                    <img src={`https://robohash.org/${userName}${email}.png`} alt="Avatar" width="150px" className="mb-4"/>
                </div>

                <TextFieldGroup error={error.name} info="Username" name="userName" placeholder="newUserName" value={newUserName} type="text" onChange={(e) => setNewUserName(e.target.value)} />
            </ModalBody>

            {/* Modal Footer */}
            <ModalFooter className="deadModalButtons">
                <button className="btn btn-info" onClick={ () => props.updateUserAction(id, {name: newUserName}, history) }>
                    Save
                </button>
                <Link to="/admin" className="btn btn-info" onClick={(e:any) => toggleModal()}>
                    Go back
                </Link>
            </ModalFooter>
        </Modal>
    );
};


// Map the redux state to props
const mapStateToProps = (state:reduxFullState) => ({
    auth: state.auth,
    error: state.error
});


// Exports
//////////

export default connect(mapStateToProps, { updateUserAction })(UserAdminModal);