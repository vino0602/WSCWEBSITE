import React from 'react';
import './Services.css'; 
import ServicesCard from './ServicesCard';
import CountUp from 'react-countup'; 
import { RiMicroscopeLine } from 'react-icons/ri';
import { MdHealthAndSafety, MdOutlineMedicalServices } from 'react-icons/md';
import { FaHeartbeat } from 'react-icons/fa';

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-backgroundColor" />;
  const icon2 = <MdHealthAndSafety size={35} className="text-backgroundColor" />;
  const icon3 = <MdOutlineMedicalServices size={35} className="text-backgroundColor" />;
  const icon4 = <FaHeartbeat size={35} className="text-backgroundColor" />;
  const icon5 = <FaHeartbeat size={35} className="text-backgroundColor" />;
  const icon6 = <FaHeartbeat size={35} className="text-backgroundColor" />;

  return (
    <div className="services-container">
      <h2 className="services-heading">Core Services</h2>
      <p className="services-description">
        As a healthcare advocate and coordinator service provider, WESTAYCLOSE
        understands the importance of caring for your loved ones while also
        managing your busy schedule. Our personalized support services are
        designed to save you time and alleviate the stress of navigating the
        healthcare system, allowing you to focus on what matters most - caring
        for your family and friends.
      </p>

      {/* Service Cards */}
      <div className="services-grid">
        <ServicesCard
          icon={icon1}
          title="Comprehensive Advocacy and Coordination Services"
          description="At WESTAYCLOSE, we understand that navigating the healthcare system can be overwhelming."
          link="/Services1"
        />
        <ServicesCard
          icon={icon2}
          title="Holistic Healthcare Solutions"
          description="We believe that true wellness encompasses more than just medical care."
          link="/Services2"
        />
        <ServicesCard
          icon={icon3}
          title="Collaborations for Comprehensive Care"
          description="At WESTAYCLOSE, we believe that delivering exceptional healthcare advocacy and coordination services."
          link="/Services3"
        />
        <ServicesCard
          icon={icon4}
          title="Our Network of Partners"
          description="We've carefully selected our partners to provide our clients with seamless access to healthcare services."
          link="/Services4"
        />
        <ServicesCard
          icon={icon5}
          title="Streamlined Care through Collaboration"
          description="Our partnerships enable us to coordinate care across multiple providers, ensuring that our clients receive seamless support."
          link="/Services5"
        />
        <ServicesCard
          icon={icon6}
          title="Partner with WESTAYCLOSE"
          description="We've carefully selected our partners to provide our clients with seamless access to healthcare solutions."
          link="/Services6"
        />
      </div>

      {/* Counter Section */}
      <div className="counter-section">
        <div className="counter-container">
          <div className="counter-item">
            <CountUp start={0} end={10} duration={2.5} suffix="+" className="counter-number" />
            <div className="counter-title">HEALTH CARE EXPERIENCE</div>
          </div>
          <div className="counter-item">
            <CountUp start={0} end={100} duration={2.5} suffix="%" className="counter-number" />
            <div className="counter-title">CUSTOMER SUPPORT</div>
          </div>
          <div className="counter-item">
            <CountUp start={0} end={95} duration={2.5} suffix="%" className="counter-number" />
            <div className="counter-title">TIMELY SERVICE</div>
          </div>
          <div className="counter-item">
            <CountUp start={0} end={97} duration={2.5} suffix="%" className="counter-number" />
            <div className="counter-title">On-Demand Assistance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
