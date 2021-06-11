import React from 'react'
import profile from '../../pictures/brian-headshot.png'
import linkedin from '../../pictures/LI-In-Bug.png'
import github from '../../pictures/GitHub-Mark-Light-120px-plus.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='profile-pic-container'>
                <img className='profile-pic' src={profile}></img>
            </div>
            <div className='link-section'>
                <a href='https://www.linkedin.com/in/brian-xue/'>
                    <img className='link-image' src={linkedin} ></img>
                </a>
                <a href='https://github.com/bxue2'>
                    <img className='link-image' src={github}></img>
                </a>
            </div>
            <div className='profile-desc'>Trivia Dungeon was created by Brian Xue.</div>
            <div className='filler-div'></div>
            <div className='credit-section'>
                <div>Credits:</div>
                <div>
                    Trivia questions seeded from <a href='https://opentdb.com/'>OpenTdb</a>
                </div>
            </div>
            {/* <a className='attribute-link' href='https://www.freepik.com/vectors/house'>House vector created by vectorpocket - www.freepik.com</a> */}
        </div>
    )
}

export default Footer;
