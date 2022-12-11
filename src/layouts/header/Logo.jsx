import React from 'react';

const Logo = ({ imgSrc, styleClass }) => {
   return (
      <>
         <a href="#" className={styleClass}>
            <img src={imgSrc} alt="site logo" />
         </a>
      </>
   );
};

export default Logo;
