import React, {useState} from 'react'
import { Modal } from '../../context/Modal'
import LoginForm from '../auth/LoginForm'

const LoginModal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className='login-button' onClick={() => setShowModal(true)}>
                Log In
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default LoginModal;
