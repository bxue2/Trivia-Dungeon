import React from 'react'
import profile from '../../pictures/brian-headshot.png'
import linkedin from '../../pictures/LI-In-Bug.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='profile-pic-container'>
                <img className='profile-pic' src={profile}></img>
            </div>
            <div className='link-section'>
                <img className='link-image' src={linkedin}></img>
            </div>
            <div className='profile-desc'></div>
            <div className='credit-section'>Trivia questions seeded from <a href='https://opentdb.com/'>OpenTdb</a></div>
            {/* <a className='attribute-link' href='https://www.freepik.com/vectors/house'>House vector created by vectorpocket - www.freepik.com</a> */}
        </div>
    )
}

export default Footer;
