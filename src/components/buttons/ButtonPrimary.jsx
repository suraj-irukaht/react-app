import React from 'react';
import { arrowLeft } from '../../assets';

const Button = ({ clickEvent }) => {
   return (
      <>
         <a href="#" className="btn-primary" onClick={clickEvent}>
            Read More <img src={arrowLeft} alt="image description" />
         </a>
      </>
   );
};

export default Button;
