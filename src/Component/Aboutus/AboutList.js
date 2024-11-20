import React from 'react';
import "./About.css"

const AboutusDetails = [
  {
    title: "Vision",
    desc: "To create a healthcare system where every patient feels informed, supported, and empowered to make the best decisions for their health, leading to improved outcomes and a more compassionate healthcare environment."
  },
  {
    title: "Mission",
    desc: "To empower patients through education and advocacy, ensuring they navigate the complexities of the healthcare system with confidence. We are dedicated to fostering transparency and accessibility, bridging the gap between patients and providers to enhance health and well-being for all."
  },
  {
    title: "Objectives",
    desc: [
      "Education and Empowerment: Provide resources and tools that enhance patient understanding of their health conditions and treatment options.",
      "Personalized Advocacy: Offer tailored support to individuals, helping them navigate the healthcare system and ensuring their voices are heard.",
      "Improving Communication: Foster open dialogue between patients and healthcare providers to promote shared decision-making.",
      "Enhancing Accessibility: Advocate for policies and practices that make healthcare more transparent and accessible to all individuals.",
      "Continuous Improvement: Regularly assess and refine our services based on patient feedback to better meet their needs and improve outcomes."
    ]
  },
  {
    title: "Qualifications",
    desc: [
      "Healthcare Experience: Our advocates have extensive experience in the healthcare industry, with a deep understanding of the complexities of the healthcare system.",
      "Advocacy Training: Our advocates have received specialized training in healthcare advocacy, equipping them with the skills and knowledge to effectively support patients and families.",
      "Certifications: Our advocates hold relevant certifications in healthcare advocacy, such as the Certified Patient Advocate (CPA) or the Board Certified Patient Advocate (BCPA)."
    ]
  },
  {
    title: "Expertise",
    desc: [
      "Healthcare Navigation: Our advocates are experts in navigating the healthcare system, with a deep understanding of the complexities of healthcare delivery.",
      "Medical Knowledge: Our advocates have a strong foundation in medical knowledge, enabling them to provide informed guidance and support to patients and families.",
      "Communication Skills: Our advocates possess excellent communication skills, allowing them to effectively communicate with patients, families, and healthcare providers.",
      "Problem-Solving: Our advocates are skilled problem-solvers, able to navigate complex healthcare situations and find solutions that meet the unique needs of each patient."
    ]
  },
  {
    title: "Ensuring Best Possible Care and Support",
    desc: [
      "Personalized Support: Our advocates provide personalized support to patients and families, tailoring their services to meet the unique needs of each individual.",
      "Comprehensive Care Coordination: Our advocates coordinate care across multiple providers, ensuring that patients receive seamless, comprehensive healthcare services.",
      "Collaboration with Healthcare Providers: Our advocates work closely with healthcare providers to ensure that patients receive the best possible care, facilitating communication and care planning between providers.",
      "Patient Education: Our advocates educate patients and families about their healthcare options, empowering them to make informed decisions about their care.",
      "Continuous Support: Our advocates provide ongoing support throughout the healthcare journey, ensuring that patients and families receive the care and support they need every step of the way."
    ]
  }
];

const Aboutlist = () => {
  return (
    <div className="aboutus_page" style={{ marginTop: 100 }}>
      <h1>About Us</h1>
      <p> At WeStayClose, we are dedicated to providing personalized healthcare advocacy and coordination services. Our mission is to bridge the gap between healthcare providers, patients, and their families. </p>
      {AboutusDetails.map((detail, index) => (
        <div key={index} className="aboutus_detail">
          <h2>{detail.title}</h2>
          {Array.isArray(detail.desc) ? (
            <ul>
              {detail.desc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{detail.desc}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Aboutlist;