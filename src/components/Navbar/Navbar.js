import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { DingdingOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from '../Button/Button';

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
              <Link to='/app/hotel' className='nav-links' onClick={closeMobileMenu}>
                Hotel
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/app/train' className='nav-links' onClick={closeMobileMenu}>
                Train
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/app/plane' className='nav-links' onClick={closeMobileMenu}>
                Plane
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/app/bus' className='nav-links' onClick={closeMobileMenu}>
                Bus
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Log In</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
