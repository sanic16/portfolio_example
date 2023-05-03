import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaTwitter, FaTwitch, FaLinkedin, FaYoutube} from 'react-icons/fa';

function Footer(){
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <FaInstagram/>
                <FaTwitter/>
                <FaTwitch/>
                <FaLinkedin/>
                <FaYoutube/>
            </div>
            <p>&copy; 2023 juliosanic.me</p>
        </div>
    );
};

export default Footer;