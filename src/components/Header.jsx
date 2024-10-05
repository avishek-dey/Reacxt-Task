
import React from 'react';
import CTA from './CTA';

const Header = () => {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">I'm a passionate developer creating amazing web experiences.</p>
        <CTA />
      </div>
    </header>
  );
};

export default Header;