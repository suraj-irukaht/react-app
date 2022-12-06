import React, { useState } from 'react';
import './navbar.scss';
import { logo } from '../../assets';
import { navLinks } from '../../constants';
import { RiMenuLine } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
   const [navState, setNavState] = useState('menu-hidden');
   return (
      <>
         <header className="header">
            <div className="container">
               <nav className="navbar">
                  <a href="#" className="logo">
                     <img src={logo} alt="My App" />
                  </a>
                  <button
                     className="menu-opener"
                     onClick={() => setNavState('menu-expand')}
                  >
                     <RiMenuLine />
                  </button>
                  <div className={`${navState} menu`}>
                     <button
                        className="menu-closer"
                        onClick={() =>
                           navState === 'menu-expand'
                              ? setNavState('menu-hidden')
                              : setNavState('menu-expand')
                        }
                     >
                        <RiCloseLine />
                     </button>
                     <ul className="unstyled">
                        {navLinks.map((navLink) => (
                           <li>
                              <a href="#">{navLink.title}</a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
      </>
   );
};

export default Navbar;
