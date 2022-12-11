import { useState } from 'react';
import './header.scss';
import { logo } from '../../assets';
import { RiMenuLine } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';
import Logo from './Logo';
import Navlist from './Navlist';

const Header = () => {
   const [navState, setNavState] = useState('menu-hidden');
   return (
      <>
         <header className="header">
            <div className="container">
               <nav className="navbar">
                  <Logo imgSrc={logo} styleClass={'header-brand'} />
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
                     <Navlist />
                  </div>
               </nav>
            </div>
         </header>
      </>
   );
};

export default Header;
