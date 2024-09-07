import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logoImage from '../assets/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".menu-button") === null && event.target.closest(".menu") === null) {
        setIsMenuOpen(false);
      }
      if (event.target.closest(".search-container") === null) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://cbp-backend-production.up.railway.app/api/search?q=${searchQuery}`);
      navigate('/search-results', { state: { results: response.data } });
    } catch (error) {
      console.error("Error performing search:", error);
    }
  };
  

  const handleMobileNavigation = (path) => {
    console.log("Navigating to:", path);
    setIsMenuOpen(false);
    navigate(path);
  };

  const menuItems = [
    { path: "/savings", label: "Tabungan" },
    { path: "/deposits", label: "Deposito" },
    { path: "/credits", label: "Kredit" },
    { path: "/about", label: "Tentang" },
    { path: "/contact", label: "Kontak" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="py-4 px-4 md:px-10 xl:px-36 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="logo" className="w-12 h-12 mr-3" />
            <h1 className="font-bold font-serif text-sm md:text-lg lg:text-xl text-teal-800 whitespace-nowrap">
              BPR Cahaya Bina Putra
            </h1>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center flex-1 mx-10">
        <form onSubmit={handleSearch} className="relative w-full">
          <input
            type="text"
            placeholder="Cari..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-teal-500"
          />
          <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <FaSearch className="text-gray-400 hover:text-teal-500" />
          </button>
        </form>
      </div>
        
        <nav className="hidden md:flex gap-5 lg:gap-10 items-center">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path} className="relative group">
              <span className="relative font-semibold text-gray-800 hover:text-teal-600 transition-colors duration-300 ease-in-out">{item.label}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          ))}
        </nav>
      
        <div className="flex items-center md:hidden">
          <button onClick={toggleSearch} className="mr-4">
            <FaSearch className="text-teal-800" size={24} />
          </button>
          <button onClick={toggleMenu} className="menu-button">
            <GiHamburgerMenu className="text-teal-800" size={30} />
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="md:hidden p-4 bg-white shadow-md search-container">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Cari..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-teal-500"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <FaSearch className="text-gray-400 hover:text-teal-500" />
            </button>
          </form>
        </div>
      )}

      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg menu">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="py-3 px-5 border-b border-teal-100 last:border-none rounded-lg hover:bg-teal-50 transition-colors text-lg text-center text-teal-800 font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavigation(item.path);
                }}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
