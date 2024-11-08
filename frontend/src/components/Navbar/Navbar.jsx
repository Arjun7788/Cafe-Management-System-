import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

// eslint-disable-next-line react/prop-types
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img className='logo' src={assets.logo1} alt='Logo' />
      </Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu('home')} className={`${menu === 'home' ? 'active' : ''}`}>
          Home
        </Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={`${menu === 'menu' ? 'active' : ''}`}>
          Menu
        </a>
        <Link to='/About'  onClick={() => setMenu('AboutUs')} className={`${menu === 'AboutUs' ? 'active' : ''}`}>
        About Us
        </Link>
        <a href='#footer' onClick={() => setMenu('contact')} className={`${menu === 'contact' ? 'active' : ''}`}>
          Contact Us
        </a>
      </ul>
      <div className='navbar-right'>
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt='Cart' />
          <div className={getTotalCartAmount() > 0 ? 'dot' : ''}></div>
        </Link>
        
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt='Profile' />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt='Orders' /> <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt='Logout' /> <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
