
import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'Databases', icon: <FaDatabase /> },
  ];

  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <div className="text-4xl mr-4">{skill.icon}</div>
              <span className="text-xl">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;