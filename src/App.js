import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Approute from './Approute';

import ScrollToTop  from './Navbar/ScrollToTop';
import ChatBox from "./Component/Socialmedia/Chatbox";
import AboutList from "./Component/Aboutus/AboutList";
import OurTeam from './Component/Ourteam/OurTeam';
import ContactUs from "./Component/Contactus/ContactUs";
import ContactForm from "./Component/Contactus/ContactForm";
import TermsandCondition from "./Termsandcond/Termsandcondition";
import PrivacyPolicy from "./Termsandcond/Privacypolicy";
import Services1 from "./Component/Services/Services1";
import Services2 from "./Component/Services/Services2";
import Services3 from "./Component/Services/Services3";
import Services4 from "./Component/Services/Services4";
import Services5 from "./Component/Services/Services5";
import Services6 from "./Component/Services/Services6";
import Blogs1 from "./Component/Blogs/Blogs1";
import Blogs2 from "./Component/Blogs/Blogs2";
import Blogs3 from "./Component/Blogs/Blogs3";
import Blogs4 from "./Component/Blogs/Blogs4";
import Blogs5 from "./Component/Blogs/Blogs5";
import Blogs6 from "./Component/Blogs/Blogs6";

import Cookies from './Component/cookies/Cookies';

import TestConnection from './Component/TestConnection';

import ReviewsManager from "./Component/ReviewsManager"; // Import ReviewsManager
import CookiesManager from "./Component/CookiesManager"; // Import CookiesManager

import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false); 
  };


return (
  <>
    <Routes>
      <Route path="/" element={<Approute />} />
      <Route path="/aboutus" element={<AboutList />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsandCondition />} />
      <Route path="/ourteam" element={<OurTeam/>} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/Services1" element={<Services1 />} />
      <Route path="/Services2" element={<Services2 />} />
      <Route path="/Services3" element={<Services3 />} />
      <Route path="/Services4" element={<Services4 />} />
      <Route path="/Services5" element={<Services5 />} />
      <Route path="/Services6" element={<Services6 />} />
      <Route path="/Blogs1" element={<Blogs1 />} />
      <Route path="/Blogs2" element={<Blogs2 />} />
      <Route path="/Blogs3" element={<Blogs3 />} />
      <Route path="/Blogs4" element={<Blogs4 />} />
      <Route path="/Blogs5" element={<Blogs5 />} />
      <Route path="/Blogs6" element={<Blogs6 />} />
      
      {/* Add routes for ReviewsManager and CookiesManager */}
      <Route path="/reviews" element={<ReviewsManager />} />
      <Route path="/cookies" element={<CookiesManager />} />
      
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>

    {isModalOpen && <ContactForm closeModal={closeModal} />}
     <TestConnection />
     <ChatBox />
     <ScrollToTop />
    <Cookies />
  </>
 );
}

export default App;
