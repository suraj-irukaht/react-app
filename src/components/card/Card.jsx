import React from 'react';
import './card.scss';
import { Button, UserInteraction } from '../buttons';

const Card = (props) => {
   return (
      <>
         <div className="card">
            <div className="card-img">
               <img src={props.cardImg} alt="image description" />
            </div>
            <div className="card-text">
               <h2>{props.cardTitle}</h2>
               <p>{props.cardDesc}</p>
               <div className="card-meta">
                  <Button />
                  <UserInteraction />
               </div>
            </div>
         </div>
      </>
   );
};

export default Card;
