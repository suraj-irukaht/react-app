import React from 'react';
import { searchIcon } from '../../assets';

const Search = ({ onChangeEvent, placeHolder }) => {
   return (
      <>
         <div className="form-input">
            <input
               type="text"
               placeholder={placeHolder}
               className="search-field"
               onChange={onChangeEvent}
            />
            <div className="icon">
               <img src={searchIcon} alt="search icon" />
            </div>
         </div>
      </>
   );
};

export default Search;
