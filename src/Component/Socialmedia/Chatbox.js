import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { MdChat } from 'react-icons/md';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltip, setTooltip] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (label) => {
    setTooltip(label);
  };

  const handleMouseLeave = () => {
    setTooltip('');
  };

  const handleSend = () => {
    if (input.trim() === '') return;
    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    // Simulate a chatbot response
    setTimeout(() => {
      const botMessage = {
        sender: 'bot',
        text: 'This is a predefined response. How can I help you further?',
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      {/* Chat Icon */}
      <div style={styles.chatIcon} onClick={toggleChatBox}>
        <MdChat size={30} color="#fff" />
      </div>

      {/* If ChatBox is open */}
      {isOpen && (
        <div style={styles.chatBoxContainer}>
          <div style={styles.iconContainer}>
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/919789086627"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.icon, backgroundColor: '#25d366' }}
              onMouseEnter={() => handleMouseEnter('WhatsApp')}
              onMouseLeave={handleMouseLeave}
            >
              <FaWhatsapp size={20} color="#fff" />
            </a>

            {/* Phone Icon */}
            <a
              href="tel:+919789086627"
              style={{ ...styles.icon, backgroundColor: '#e83e8c' }}
              onMouseEnter={() => handleMouseEnter('+919789086627')}
              onMouseLeave={handleMouseLeave}
            >
              <FaPhone size={20} color="#fff" />
            </a>

            {/* Email Icon */}
            <a
              href="mailto:info@westayclose.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.icon, backgroundColor: 'red' }}
              onMouseEnter={() => handleMouseEnter('info@westayclose.in')}
              onMouseLeave={handleMouseLeave}
            >
              <FaEnvelope size={20} color="#fff" />
            </a>

            {/* Tooltip */}
            {tooltip && <div style={styles.tooltip}>{tooltip}</div>}
          </div>

          {/* Chatbot Window */}
          <div style={styles.chatbotContainer}>
            <div style={styles.chatWindow}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={
                    message.sender === 'user'
                      ? styles.userMessage
                      : styles.botMessage
                  }
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div style={styles.inputContainer}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                style={styles.input}
              />
              <button onClick={handleSend} style={styles.sendButton}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    transition: 'all 0.3s ease-in-out',
  },
  chatIcon: {
    backgroundColor: '#007bff',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
  },
  chatBoxContainer: {
    position: 'absolute',
    bottom: '70px', // Positioning the chatbox above the chat icon
    right: '0',
    zIndex: 1001,
    width: '300px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '10px',
  },
  icon: {
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#fff',
    transition: 'transform 0.2s',
  },
  tooltip: {
    position: 'absolute',
    left: '60px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#333',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
  },
  chatbotContainer: {
    backgroundColor: '#f8f8f8',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    marginTop: '10px',
    width: '100%',
  },
  chatWindow: {
    maxHeight: '200px',
    overflowY: 'auto',
    padding: '10px',
  },
  userMessage: {
    textAlign: 'right',
    margin: '5px 0',
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '10px',
  },
  botMessage: {
    textAlign: 'left',
    margin: '5px 0',
    padding: '5px 10px',
    backgroundColor: '#e9e9e9',
    borderRadius: '10px',
  },
  inputContainer: {
    display: 'flex',
    borderTop: '1px solid #ccc',
  },
  input: {
    flex: 1,
    border: 'none',
    padding: '10px',
    borderRadius: '0 0 0 10px',
    outline: 'none',
  },
  sendButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '0 0 10px 0',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default ChatBox;
