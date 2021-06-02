import React, {useState} from 'react'
import { Modal } from '../../context/Modal'
import SignUpForm from '../auth/SignUpForm'

const SignUpModal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm />
                </Modal>
            )}
        </>
    )
}

export default SignUpModal;
