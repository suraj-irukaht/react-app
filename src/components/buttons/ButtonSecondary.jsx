import React from 'react';

const ButtonSecondary = ({ clickEvent }) => {
   return (
      <>
         <button className="btn-secondary" onClick={clickEvent}>
            Load More
         </button>
      </>
   );
};

export default ButtonSecondary;
