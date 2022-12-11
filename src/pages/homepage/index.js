import React from 'react';
import { img01 } from '../../assets';
import { Banner, Form, LargePost, Cards } from '../../components';

const Homepage = () => {
   return (
      <>
         <Banner bannerImage={img01} />
         <Form />
         <LargePost />
         <Cards />
      </>
   );
};

export default Homepage;
