import React from 'react';
import { arrowLeft } from '../../assets';

const Button = () => {
   return (
      <>
         <a href="#" className="btn-primary">
            Read More <img src={arrowLeft} alt="image description" />
         </a>
      </>
   );
};

export default Button;
