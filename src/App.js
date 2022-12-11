import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './layouts';
import { Homepage, Errorpage, About, Contact, SinglePost } from './pages';

const App = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<SharedLayout />}>
                  <Route index element={<Homepage />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="singlepost/:postId" element={<SinglePost />} />
                  <Route path="*" element={<Errorpage />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default App;
