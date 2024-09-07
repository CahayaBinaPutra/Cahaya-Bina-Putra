import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaComments, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import avatarImage from '../assets/avatar2.png'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const [quickReplies, setQuickReplies] = useState(['Lokasi', 'Jam operasional', 'Layanan']);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { text: "Selamat datang di BPR Cahaya Bina Putra! Saya asisten virtual Anda. Apa yang bisa saya bantu hari ini?", user: false }
      ]);
    }
  }, [isOpen]);

  const handleSubmit = async (message) => {
    if (message.trim()) {
      const userMessage = { text: message, user: true };
      setMessages(msgs => [...msgs, userMessage]);
      setInput('');

      try {
        const response = await axios.post('https://cbp-backend-production.up.railway.app/api/chatbot', { message });
        const botMessage = { text: response.data.reply, user: false };
        setMessages(msgs => [...msgs, botMessage]);
      } catch (error) {
        console.error('Error fetching response:', error);
        const errorMessage = { text: "Maaf, terjadi kesalahan. Silakan coba lagi nanti.", user: false };
        setMessages(msgs => [...msgs, errorMessage]);
      }
    }
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 w-full sm:w-auto sm:bottom-4 sm:right-4">
      {!isOpen && (
        <button 
          onClick={toggleChat} 
          className="fixed bottom-4 right-4 bg-teal-600 text-white rounded-full p-4 shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-110"
        >
          <FaComments size={24} />
        </button>
      )}
      {isOpen && (
        <div className="flex flex-col h-screen sm:h-auto sm:max-h-[600px] w-full sm:w-96 bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <img src= {avatarImage} alt="BPR Cahaya Bina Putra" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-bold text-lg">Asisten BPR Cahaya Bina Putra</span>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 transition-colors">
              <FaTimes size={20} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-4 flex ${msg.user ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] p-3 rounded-2xl ${
                  msg.user 
                    ? 'bg-teal-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 shadow-md rounded-bl-none'
                }`}>
                  {!msg.user && (
                    <div className="flex items-center mb-1">
                      <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mr-2">
                        <FaUser className="text-white text-xs" />
                      </div>
                      <span className="text-xs font-semibold text-teal-800">Asisten BPR</span>
                    </div>
                  )}
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-2 bg-gray-100">
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSubmit(reply)}
                  className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm hover:bg-teal-200 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(input); }} className="border-t border-gray-200 p-4 bg-white flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pesan Anda..."
              className="flex-grow p-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
            <button type="submit" className="ml-2 bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              <FaPaperPlane className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;