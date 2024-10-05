
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Innovators Inc.',
      position: 'Senior Frontend Developer',
      period: 'Jan 2020 - Present',
      description: 'Leading the frontend development team, implementing new features, and optimizing performance.',
    },
    {
      company: 'Web Solutions LLC',
      position: 'Full Stack Developer',
      period: 'Jun 2017 - Dec 2019',
      description: 'Developed and maintained various web applications using React, Node.js, and MongoDB.',
    },
    {
      company: 'Digital Creations Co.',
      position: 'Junior Web Developer',
      period: 'Sep 2015 - May 2017',
      description: 'Assisted in the development of responsive websites and e-commerce platforms.',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold">{exp.position}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;