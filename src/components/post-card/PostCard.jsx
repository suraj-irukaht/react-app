import './post-card.scss';
import { UserInteraction, Button } from '../buttons';

const PostCard = ({ title, desc, imgFile }) => {
   return (
      <>
         <section className="post">
            <div className="container">
               <div className="post-wrap">
                  <div className="card-text is-big">
                     <h2>{title}</h2>
                     <p>{desc}</p>
                     <div className="card-meta">
                        <Button />
                        <UserInteraction />
                     </div>
                  </div>
                  <div className="card-img is-big">
                     <img src={imgFile} alt="image description" />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default PostCard;
