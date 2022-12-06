import React from 'react';
import Card from './Card';
import { cardInfo } from '../../constants';
import { ButtonSecondary } from '../buttons';

const Cards = () => {
   return (
      <>
         <section className="cards">
            <div className="container">
               <div className="card-wrap">
                  {cardInfo.map((card) => (
                     <Card key={card.id} {...card} />
                  ))}
               </div>
               <div className="btn-holder">
                  <ButtonSecondary />
               </div>
            </div>
         </section>
      </>
   );
};

export default Cards;
