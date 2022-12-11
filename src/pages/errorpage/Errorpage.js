import React from 'react';
import { NavLink } from 'react-router-dom';
import { img01 } from '../../assets';

import Banner from '../../components/banner/Banner';

const Errorpage = () => {
   return (
      <>
         <section className="error-block">
            <div className="bg-img">
               <img src={img01} alt="image description" />
            </div>
            <div className="container">
               <div className="error-content">
                  <div>
                     <h2>404</h2>
                     <NavLink to="/" className={'btn-secondary'}>
                        Back to Homepage
                     </NavLink>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Errorpage;
