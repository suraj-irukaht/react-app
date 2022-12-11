import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
   return (
      <>
         <div className="wrapper">
            <Header />
            <main className="main">
               <Outlet />
            </main>
            <Footer />
         </div>
      </>
   );
};

export default SharedLayout;
