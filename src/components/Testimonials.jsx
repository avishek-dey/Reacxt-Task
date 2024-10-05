
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, Tech Corp',
      content: 'Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are outstanding.',
    },
    {
      name: 'Jane Smith',
      position: 'Project Manager, Digital Solutions',
      content: 'I was impressed by the quality of work and the ability to deliver projects on time. Highly recommended!',
    },
    {
      name: 'Mike Johnson',
      position: 'CTO, Innovate Inc',
      content: 'I was impressed by the quality of work and the ability to deliver projects on time. Highly recommended!',}
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <p className="mb-4">{testimonial.content}</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;