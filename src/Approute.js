import Content from "./Content";
import Services from './Component/Services/Services';
import Blogs from './Component/Blogs/Blogs';
import AboutUsPage from "./Component/Aboutus/AboutUsPage";
import PackageList from './Component/Packages/PackageList';
import Review from './Component/Socialmedia/Review';
import Imagecaurosel from './Imagecaurosel';
import Header from './Navbar/Header';
import Headtop from "./Navbar/Headtop";
import Footer from "./Navbar/Footer";
import LocationsPage from './pages/LocationsPage'; 
import SocialMedia from './Navbar/Socialmedia';
import OSMapComponent from "./Component/Contactus/OSMapComponent";
import Faq from "./Termsandcond/Faq";


const Approute = () => {
    return (
            <>
            <main>
                <Headtop />
                <SocialMedia />
                <Header />
                                <div id='/'><Imagecaurosel /></div>
                                <div id='About'><AboutUsPage /></div>
                                <div id='Contentpage'><Content /></div>
                                <div id='Ourservices'><Services /></div>
                                <div id='PackageList'><PackageList /></div>
                                <div id='Blogcard'><Blogs /></div>
                                <div id="Faq"><Faq/></div>
                                <div id='Websitereview'><Review /></div>
                                <div id='locations'><LocationsPage /></div>
                                </main>
                        
                        
             <div id="contact">
                <OSMapComponent />
             <Footer /> 
             </div>  
            </>
       
    );
}

export default Approute;
