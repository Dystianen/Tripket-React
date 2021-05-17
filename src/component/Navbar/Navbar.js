// Essence
import React, { useEffect, useState } from 'react';

// Style
import './Navbar.css';

// Components
import { DingdingOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Navbar() {
  // States
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // State Functions
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/app/home' className='navbar-logo' onClick={closeMobileMenu}>
            <DingdingOutlined /> TRIPKET
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <CloseOutlined /> : <MenuOutlined />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/app/profile' className='nav-links' onClick={closeMobileMenu}>
                Hotel
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/app/train' className='nav-links' onClick={closeMobileMenu}>
                Train
              </Link>
            </li>
            <li className='nav-item'>
              <div to='/' className='nav-links' onClick={closeMobileMenu}>
                Plane
              </div>
            </li>
            <li className='nav-item'>
              <div to='/' className='nav-links' onClick={closeMobileMenu}>
                Bus
              </div>
            </li>
            <li className='nav-item'>
              <div to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </div>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
