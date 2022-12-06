import React from 'react';
import './img-card.scss';
import { img02 } from '../../assets';
import { UserInteraction, Button } from '../buttons';

const ImgCard = () => {
   return (
      <>
         <section className="img-card">
            <div className="container">
               <div className="img-card--wrap">
                  <div className="card-text is-big">
                     <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Praesent tristique magna sit amet purus
                        gravida quis blandit. Bibendum arcu vitae elementum
                        curabitur. Amet nulla facilisi morbi tempus iaculis urna
                        id. Tristique nulla aliquet enim tortor at auctor urna.
                        At imperdiet dui accumsan sit amet nulla. Tincidunt
                        augue interdum velit euismod. Tristique senectus et
                        netus et malesuada fames ac turpis. Nibh nisl
                        condimentum id venenatis...
                     </p>
                     <div className="card-meta">
                        <Button />
                        <UserInteraction />
                     </div>
                  </div>
                  <div className="card-img is-big">
                     <img src={img02} alt="image description" />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ImgCard;
