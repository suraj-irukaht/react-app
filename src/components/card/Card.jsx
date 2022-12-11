import React, { useEffect, useState } from 'react';
import './card.scss';
import { NavLink } from 'react-router-dom';

import axios from 'axios';
import { ButtonSecondary } from '../buttons';
import Search from '../form/Search';

const Card = () => {
   const API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
   const [drinks, setDrinks] = useState([]);
   const [totalItem, setTotalItem] = useState(0);
   const [itemVisible, setItemVisible] = useState(6);
   const [getVal, setVal] = useState('');

   const getDrinks = () => {
      axios.get(API).then((res) => {
         setDrinks([...drinks, ...res.data.drinks]);
         setTotalItem(res.data.drinks.length);
      });
   };

   useEffect(() => {
      getDrinks();
   }, []);

   const loadMoreDrinks = () => {
      setItemVisible(itemVisible + 3);
   };

   const getInputValue = (e) => {
      setVal(e.target.value);
   };

   return (
      <>
         <section className="cards">
            <div className="container">
               <div className="card-search">
                  <Search
                     onChangeEvent={getInputValue}
                     placeHolder={'Search By Name'}
                  />
               </div>
               <div className="card-wrap">
                  {drinks
                     .filter((item) => {
                        if (getVal === '') {
                           return item;
                        } else if (
                           item.strIngredient1
                              .toLowerCase()
                              .includes(getVal.toLowerCase())
                        ) {
                           return item;
                        }
                     })
                     .slice(0, itemVisible)
                     .map((drink) => (
                        <div className="card" key={drink.idDrink}>
                           <div className="card-img">
                              <img
                                 src={drink.strDrinkThumb}
                                 alt={drink.strDrink}
                              />
                           </div>
                           <div className="card-text">
                              <h2>{drink.strIngredient1}</h2>
                              <p>{drink.strInstructions}</p>
                              <NavLink
                                 className={`btn-primary`}
                                 to={`singlepost/${drink.idDrink}`}
                              >
                                 Read More
                              </NavLink>
                           </div>
                        </div>
                     ))}
               </div>
               <div className="btn-holder">
                  {itemVisible > totalItem ? (
                     <div>No more Drinks</div>
                  ) : (
                     <ButtonSecondary clickEvent={loadMoreDrinks} />
                  )}
               </div>
            </div>
         </section>
      </>
   );
};

export default Card;

// export const showSinglePost = (postId) => {
//    return axios.get(`${postId}`).then((res) => res.data);
// };
