import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Feedback from '../../components/Feedback/Feedback';
import { assets } from '../../assets/assets';

const Footer = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo2} alt='Koa Cafe' className='logo2' />  
          <p>Where Every Sip Tells a Story</p>
          <div className='footer-social-icons'>
            <a href='https://www.facebook.com/login' target='_blank' rel='noopener noreferrer'>
              <img src={assets.facebook_icon} alt='Facebook' className='icon' />
            </a>
            <a href='https://www.instagram.com/accounts/login' target='_blank' rel='noopener noreferrer'>
              <img src={assets.insta_icon} alt='Instagram' className='icon' />
            </a>
            <a href='https://twitter.com/login' target='_blank' rel='noopener noreferrer'>
              <img src={assets.twitter_icon} alt='Twitter' className='icon' />
            </a>
          </div>
        </div>

        <div className='footer-content-center'>
          <h2>Koa Cafe</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <Link to='/About' onClick={() => setMenu('AboutUs')} className={menu === 'AboutUs' ? 'active' : ''}>
                About Us
              </Link>
            </li>
          </ul>
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 91067-79123</li>
            <li>Arjun3@gmail.com</li>
          </ul>
        </div>

        <div className='footer-content-right'>
          <Feedback />
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Footer;
