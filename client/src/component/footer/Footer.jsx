import React from 'react';

// styles file
import './Footer.css';

const Footer = () => {
    return (
        <div
            className='footer'
        >
            
            <p>©{new Date().getFullYear()} {" "}
                <a href="https://shwetang.netlify.app/" target="_blank">Shwetang</a>
            </p>
            
            {/* <p>
                <Link to='/about'>About</Link> | <Link to='/contact'>Contact</Link>
            </p> */}
        </div>
    )
}

export default Footer
