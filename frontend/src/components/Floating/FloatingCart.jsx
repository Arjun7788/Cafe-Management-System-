import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingCartButton.css'; // For styling the button
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FloatingCartButton = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/cart'); 
    
  };

  return (
    <div className="floating-cart-button" onClick={handleRedirect}>
      
          <img src={assets.basket_icon} alt='Cart' />   
          <div className={getTotalCartAmount() > 0 ? 'dot' : ''}></div>     
       
    </div>
  );
};

export default FloatingCartButton;
