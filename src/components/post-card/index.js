import PostCard from './PostCard';
import { img02 } from '../../assets';

const LargePost = () => {
   return (
      <>
         <PostCard
            title={'Lorem ipsum dolor sit amet, consectetur'}
            desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Praesent tristique magna sit amet purus
                    gravida quis blandit. Bibendum arcu vitae elementum
                    curabitur. Amet nulla facilisi morbi tempus iaculis urna
                    id. Tristique nulla aliquet enim tortor at auctor urna.
                    At imperdiet dui accumsan sit amet nulla. Tincidunt
                    augue interdum velit euismod. Tristique senectus et
                    netus et malesuada fames ac turpis. Nibh nisl
                    condimentum id venenatis...`}
            imgFile={img02}
         />
      </>
   );
};

export default LargePost;
