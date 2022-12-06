import React from 'react';
import './banner.scss';
import { img01 } from '../../assets';

const Banner = () => {
   return (
      <>
         <section className="banner">
            <div className="bg-img">
               <img src={img01} alt="image description" />
            </div>
            <div className="container"></div>
         </section>
      </>
   );
};

export default Banner;
