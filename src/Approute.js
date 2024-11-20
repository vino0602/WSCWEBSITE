import Content from "./Content";
import Services from './Component/Services/Services';
import Blogs from './Component/Blogs/Blogs';
import AboutUsPage from "./Component/Aboutus/AboutUsPage";
import PackageList from './Component/Packages/PackageList';
import Review from './Component/Socialmedia/Review';
import Imagecaurosel from './Imagecaurosel';
import Header from './Navbar/Header';
import Footer from "./Navbar/Footer";
import SocialMedia from './Navbar/Socialmedia';

const Approute = () => {
    return (
        <>
            <main>
            <SocialMedia/>
            <Header />
            
            <div id='/'><Imagecaurosel /></div>
            <div id='About'><AboutUsPage /></div>
                <div id='Contentpage'><Content /></div>
                <div id='Ourservices'><Services /></div>
                <div id='PackageList'><PackageList /></div>
                <div id='Blogcard'><Blogs /></div>
                <div id='Websitereview'><Review /></div>
            </main>
            <Footer/>
        </>
    );
}
export default Approute;
