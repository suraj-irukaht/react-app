import React from 'react';
import './banner.scss';

const Banner = ({ bannerImage }) => {
   return (
      <>
         <section className="banner">
            <div className="bg-img">
               <img src={bannerImage} alt="image description" />
            </div>
         </section>
      </>
   );
};

export default Banner;
