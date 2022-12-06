import React from 'react';
import { eyeIcon, msgIcon } from '../../assets';

const UserInteraction = () => {
   return (
      <>
         <div className="meta-tags">
            <a href="#" className="seen-by">
               <img
                  src={eyeIcon}
                  alt="image description"
                  className="eye-icon"
               />
               <div className="seen-num">2459</div>
            </a>
            <a href="#" className="comment">
               <img
                  src={msgIcon}
                  alt="image description"
                  className="message-icon"
               />
               <div className="comment-num">47</div>
            </a>
         </div>
      </>
   );
};

export default UserInteraction;
