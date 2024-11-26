import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const generalQuestionsAndAnswers = [
    {
      question: "If my parents are travelling and need help, how do you assist them?",
      answer:
        "This need has cropped up quite often, especially during Covid times when seniors have to go out of the city or country. We have been able to fulfil this specialised requirement and get partners for our seniors to accompany them in their travels.",
    },
    {
      question: "How will I be notified when any emergency occurs?",
      answer: "You will receive notifications through email, SMS, and phone calls immediately.",
    },
  ];

  const planQuestionsAndAnswers = [
    {
      question: "How do I coordinate with the hospital during emergencies?",
      answer:
        "WeStayClose carries out an extensive 4-stage plan with qualified and trained clinical professionals in the case of an emergency...",
    },
    {
      question: "How can I make payments for the plan?",
      answer: "Payments can be made online via our website, bank transfers, or using our mobile app.",
    },
  ];

  const questionsAndAnswers =
    activeTab === "General" ? generalQuestionsAndAnswers : planQuestionsAndAnswers;

  return (
    <div className="faq-container">
      <h2>We got answers to your questions</h2>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "General" ? "active" : ""}`}
          onClick={() => setActiveTab("General")}
        >
          General
        </button>
        <button
          className={`tab-button ${activeTab === "Plans" ? "active" : ""}`}
          onClick={() => setActiveTab("Plans")}
        >
          Plans
        </button>
      </div>
      <div className="faq-list">
        {questionsAndAnswers.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              {item.question}
              <span className="toggle-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
