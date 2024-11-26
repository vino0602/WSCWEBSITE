import React from 'react';
import './OurTeam.css';

const familyData = [
  {
    imgSrc: require('../../assets/img/doc4.jpg'),
    altText: 'Our Family',
    Name: 'Santhosh',
    Designation: 'HOD',
    description: `Welcome to our family! At WESTAYCLOSE, we believe in creating a
      supportive and compassionate environment. Our team is dedicated to
      providing the best care and advocacy services to ensure the well-being
      of you and your loved ones.`,
  },
  {
    imgSrc: require('../../assets/img/doc5.jpg'),
    altText: 'Family Member 2',
    Name: 'Santhosh',
    Designation: 'HOD',
    description: `Meet one of our dedicated staff members who brings compassion and
      professionalism to our daily operations. Every experience is made
      personal to cater to our clients' needs.`,
  },
  {
    imgSrc: require('../../assets/img/doc6.jpg'),
    altText: 'Family Member 3',
    Name: 'Santhosh',
    Designation: 'HOD',
    description: `Our team continually works towards making your well-being our
      top priority, ensuring you feel supported and cared for at all times.`,
  },
];

const OurTeam = () => {
  return (
    <>
    <h2>WSC Family</h2>
    <div className="our-family-container">
      {familyData.map((member, index) => (
        <div
          className={`member-container ${
            index === 1 ? 'reverse-layout' : ''
          }`}
          key={index}
        >
          <div className="description-container">
          <p>{member.Name}</p>
            <p>{member.Designation}</p>
            <p>{member.description}</p>
          </div>
          <div className="image-container">
            <img
              src={member.imgSrc}
              alt={member.altText}
              className="family-image"
            />
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default OurTeam;