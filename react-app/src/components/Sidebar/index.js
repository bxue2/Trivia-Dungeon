import React, {useState} from 'react'
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    const user = useSelector(state => state.session.user);
    const history = useHistory();

    let sidebarLinks = (
        <div className='sign-up-prompt'>
            <div className='prompt-body'>
                Please sign up/log in to unlock these functions
            </div>
        </div>
    )

    if(user){
        sidebarLinks = (
            <>
                <div className='sidebar-link' onClick={() => history.push('/questions')}>
                    Questions
                </div>
                <div className='sidebar-link' onClick={() => history.push('/sets')}>
                    Sets
                </div>
            </>
        )
    }

    // const [showBar, setShowBar] = useState(true)
    return (
        <div className='sidebar-container'>
            {/* <div className='sidebar-controller'></div> */}
            {sidebarLinks}

        </div>
    )
}

export default Sidebar;
