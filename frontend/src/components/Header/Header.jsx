import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Not just about coffee</h2>
        <p>At Koa Cafe, we turn everyday moments into delightful experiences. Join us for a cup of inspiration and a taste of joy.</p>
        {/* This button now navigates to the menu section */}
        <a href='#explore-menu'>
          <button>View Menu</button>
        </a>
      </div>
    </div>
  )
}

export default Header
