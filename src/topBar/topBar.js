import React from 'react';
import './topBar.css';
import logo from '../assets/logo.jpg';
import { Link } from 'react-scroll';

function TopBar() {
  return (
    <div className='topbar_container'>
      {/* Logo Section */}
      <div className='logo_container'>
        <img src={logo} alt='logo' className='logo' />
      </div>

      {/* Navigation Links */}
      <div className='option_container'>
        <div className='nav_links'>
          <Link
            activeClass='active'
            to='home_page'
            className='top_item'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          <Link
            to='service_screen'
            className='top_item'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </Link>
          <Link
            to='about_screen'
            className='top_item'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Us
          </Link>
          <Link
            to='contact_screen'
            className='top_item'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
