import React from 'react';
import './footer.scss';
import { logo } from '../../assets';
import { footerLinks } from '../../data';

const Footer = () => {
   return (
      <>
         <footer className="footer">
            <div className="container">
               <div className="footer-content">
                  <div className="footer-desc">
                     <a href="#" className="footer-brand">
                        <img src={logo} alt="my app" />
                     </a>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                     </p>
                     <span className="copy-right lg-visible">
                        ©<a href="#">My-app</a> 2022. All rights reserved
                     </span>
                  </div>
                  <div className="footer-links">
                     {footerLinks.map((elem, index) => (
                        <div className="footer-link" key={index}>
                           <h2 className="footer-title">{elem.title}</h2>
                           <ul className="unstyled">
                              {elem.links.map((link, index) => (
                                 <li key={index}>
                                    <a href="#">{link.name}</a>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>
               <span className="copy-right lg-hidden">
                  ©<a href="#">My-app</a> 2022. All rights reserved
               </span>
            </div>
         </footer>
      </>
   );
};

export default Footer;
