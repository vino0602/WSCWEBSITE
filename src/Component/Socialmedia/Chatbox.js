import React, { useState } from 'react';
import { FaWhatsapp, FaHeadphones, FaPhone } from 'react-icons/fa';
import { MdChat } from 'react-icons/md';
import './Chatbox.css';

const Chatbox = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneNumberVisible, setIsPhoneNumberVisible] = useState(false);
  const [isWelcomeScreenOpen, setIsWelcomeScreenOpen] = useState(false);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([]);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsWelcomeScreenOpen(false);
      setIsChatBoxOpen(false);
      setIsPhoneNumberVisible(false);
    }
  };

  const openWelcomeScreen = () => {
    setIsWelcomeScreenOpen(true);
    setIsChatBoxOpen(false);
  };

  const handleNext = () => {
    if (name.trim() && email.trim()) {
      setIsWelcomeScreenOpen(false);
      setIsChatBoxOpen(true);
      openChatBox();
    } else {
      alert('Please enter your name and email.');
    }
  };

  const openChatBox = () => {
    setMessages([
      { sender: 'admin', text: `Welcome to Westayclose, ${name}! How can I assist you today?` },
      { sender: 'admin', text: '1. Do you have questions about diet and nutrition?', questionId: 1 },
      { sender: 'admin', text: '2. Are you looking for exercise tips?', questionId: 2 },
      { sender: 'admin', text: '3. Need advice on managing stress and mental well-being?', questionId: 3 },
    ]);
  };

  const togglePhoneNumber = () => {
    setIsPhoneNumberVisible(!isPhoneNumberVisible);
  };

  const handleQuestionClick = (questionId) => {
    let response = '';
    switch (questionId) {
      case 1:
        response = 'A balanced diet is crucial for good health. Focus on whole foods like fruits, vegetables, and lean proteins!';
        break;
      case 2:
        response = 'Exercise is key to maintaining your well-being. Aim for at least 30 minutes of physical activity daily.';
        break;
      case 3:
        response = 'Managing stress is important. Consider practices like deep breathing, meditation, or even short walks in nature.';
        break;
      default:
        response = 'Sorry, I could not understand your request.';
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'admin', text: response },
    ]);
  };

  return (
    <div className="container">
      <div className="chat-icon" onClick={toggleMenu}>
        <MdChat size={32} color="#fff" />
      </div>

      {isMenuOpen && (
        <div className="menu-container">
          <div className="icon-wrapper" onClick={openWelcomeScreen}>
            <FaHeadphones size={24} color="#8e44ad" />
          </div>

          <div className="icon-wrapper" onClick={togglePhoneNumber}>
            <FaPhone size={24} color="#2c3e50" />
            {isPhoneNumberVisible && (
              <div className="phone-number">
                +91 97890 86627
              </div>
            )}
          </div>

          <div
            className="icon-wrapper"
            onClick={() => window.open('https://wa.me/919789086627', '_blank')}
          >
            <FaWhatsapp size={24} color="#25D366" />
          </div>
        </div>
      )}

      {isWelcomeScreenOpen && (
        <div className="welcome-screen">
          <h2 className="welcome-text">Welcome to Westayclose</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <button onClick={handleNext} className="next-button">
            Next
          </button>
        </div>
      )}

      {isChatBoxOpen && (
        <div className="chat-box-container">
          <div className="chat-window">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === 'user'
                    ? 'user-message'
                    : message.questionId
                    ? 'question-message'
                    : 'response-message'
                }
                onClick={message.questionId ? () => handleQuestionClick(message.questionId) : null}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
