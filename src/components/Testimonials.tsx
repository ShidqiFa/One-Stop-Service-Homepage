import React from 'react';
import { StarIcon } from 'lucide-react';
const testimonials = [{
  content: 'The equipment rental service was fantastic. Everything was in perfect condition and delivered on time. Will definitely use again!',
  author: 'Sarah Johnson',
  role: 'Event Planner',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}, {
  content: "The nursing staff was professional, caring, and attentive. They made my recovery so much easier. I'm grateful for their support.",
  author: 'Michael Rodriguez',
  role: 'Patient',
  avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}, {
  content: "My daughter's tutor has been amazing. Her grades have improved significantly, and she's much more confident in her abilities. Thank you!",
  author: 'Lisa Thompson',
  role: 'Parent',
  avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}];
export const Testimonials = () => {
  return <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Don't just take our word for it
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400" />)}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img className="h-10 w-10 rounded-full mr-4" src={testimonial.avatar} alt={testimonial.author} />
                <div>
                  <h4 className="text-gray-900 font-medium">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};