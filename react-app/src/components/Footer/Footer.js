import React from 'react'
import door from '../../pictures/brian-headshot.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='profile-pic-container'>
                <img className='profile-pic' src={door}></img>
            </div>
            <div className='link-section'></div>
            {/* <a className='attribute-link' href='https://www.freepik.com/vectors/house'>House vector created by vectorpocket - www.freepik.com</a> */}
        </div>
    )
}

export default Footer;
