import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import './singlepost.scss';

{
}
const SinglePost = () => {
   const API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
   const { postId } = useParams();
   const [drink, setDrink] = useState({});

   useEffect(() => {
      getDrink();
   }, []);

   const getDrink = () => {
      axios.get(API).then((res) => {
         const data = res.data.drinks;
         const newPost = data.find((item) => item.idDrink === postId);
         console.log(newPost);
         setDrink(newPost);
      });
   };

   return (
      <>
         <section className="single-post">
            <div className="banner">
               <div className="bg-img">
                  <img src={drink.strDrinkThumb} alt={drink.strIngredient1} />
               </div>
            </div>
            <div className="post-desc">
               <div className="container">
                  <h2>{drink.strIngredient1}</h2>
                  <p>{drink.strInstructions}</p>
                  <p>{drink.strInstructionsDE}</p>
                  <p>{drink.strInstructionsES}</p>
                  <p>{drink.strInstructionsIT}</p>
                  <NavLink to="/" className={'btn-secondary'}>
                     Back to Homepage
                  </NavLink>
               </div>
            </div>
         </section>
      </>
   );
};

export default SinglePost;
