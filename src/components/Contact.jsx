// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Work With Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;