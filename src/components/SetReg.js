import React, {useState} from 'react';
import Modal from 'react-modal';

function SetReg(props){
    const [popUpIsOpen, setPopUpIsOpen] = useState(false);
    // const [userAuth, setUserAuth] = useState(props);
    let newUserType = "isPartner";
    // let userAuth = props.option;
    let changeUserAuth = (type) => props.update({
        userRegistered: false,
        userType: type
    });
    return (
        <div>
            <button type="button" className='btn' onClick={() => setPopUpIsOpen(true)}>
                Sign up
            </button>
            <Modal isOpen={popUpIsOpen}>
                <div>
                    <button onClick={() => {
                        newUserType = "isPartner";
                        changeUserAuth(newUserType);
                        setPopUpIsOpen(false);
                    }}>
                        Sign up as Partner
                    </button>
                    <button onClick={() => {
                        newUserType = "isFarmer";
                        changeUserAuth(newUserType);
                        setPopUpIsOpen(false);
                    }}>
                        Sign up as Farmer
                    </button>
                </div>

            </Modal>
        </div>);
}

export default SetReg;