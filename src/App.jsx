import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Savings from './components/Savings';
import DetailSavings from './components/DetailSavings';
import Credits from './components/Credits';
import Deposits from './components/Deposits';
import DetailCredits from './components/DetailCredits';
import DetailDeposits from './components/DetailDeposits';
import SearchResults from './components/SearchResults';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/savings" element={<Savings />} />
      <Route path="/savings/:slug" element={<DetailSavings />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/credits/:slug" element={<DetailCredits />} />
      <Route path="/deposits" element={<Deposits />} />
      <Route path="/deposits/:slug" element={<DetailDeposits />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/Chatbot" element={<ChatBot />} />
    </Routes>
  );
}

export default App;