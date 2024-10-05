
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application built with React and Firebase.',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      title: 'Portfolio Website',
      description: 'A customizable portfolio template for developers using Gatsby and GraphQL.',
      image: '/placeholder.svg?height=200&width=300',
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;