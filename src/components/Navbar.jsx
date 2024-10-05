// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900/60 border-b border-b-white/20 backdrop-blur-xl fixed w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">My Portfolio</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">About</a>
              <a href="#skills" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Skills</a>
              <a href="#experience" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Experience</a>
              <a href="#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Projects</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
            </div>
          </div>
          <div className="hidden md:block">
            <button onClick={toggleTheme} className="ml-4 focus:outline-none">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="mr-4 focus:outline-none">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700" onClick={toggleMenu}>About</a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700" onClick={toggleMenu}>Skills</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700" onClick={toggleMenu}>Experience</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;