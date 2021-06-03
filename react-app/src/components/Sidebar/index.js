import React from 'react'
import {useSelector} from 'react-redux';
import { NavLink} from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    const user = useSelector(state => state.session.user);

    let sidebarLinks = (
        <>
        </>
    )

    if(user){
        sidebarLinks = (
            <>
                <NavLink className='sidebar-link' to='/questions'>
                    Questions
                </NavLink>
                <NavLink className='sidebar-link' to='/sets'>
                    Sets
                </NavLink>
            </>
        )
    } else{
        sidebarLinks = (
            <div className='sign-up-prompt'>
                <div className='prompt-body'>
                    Please sign up/log in to unlock these functions
                </div>
            </div>
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
