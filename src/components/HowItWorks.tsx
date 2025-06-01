import React from 'react';
import { SearchIcon, CalendarIcon, CheckSquareIcon } from 'lucide-react';
import { scrollToElement } from '../utils/scroll';
const steps = [{
  title: 'Find Your Service',
  description: 'Browse our wide range of services and select what you need. Filter by category, price, or availability.',
  icon: SearchIcon,
  color: 'text-orange-500',
  bgColor: 'bg-orange-100'
}, {
  title: 'Book an Appointment',
  description: 'Choose a convenient date and time. Our online booking system makes scheduling easy and hassle-free.',
  icon: CalendarIcon,
  color: 'text-blue-600',
  bgColor: 'bg-blue-100'
}, {
  title: 'Enjoy Quality Service',
  description: 'Our professionals will arrive on time and provide exceptional service. Satisfaction guaranteed.',
  icon: CheckSquareIcon,
  color: 'text-orange-500',
  bgColor: 'bg-orange-100'
}];
export const HowItWorks = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToElement(id);
  };
  return <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Simple, fast, and reliable service in just three steps
          </p>
        </div>
        <div className="mt-16">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 w-full h-0.5 bg-gray-200" aria-hidden="true"></div>
            {/* Steps */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between">
              {steps.map((step, index) => <div key={index} className="md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} mb-4`}>
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <div className="text-center px-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <a href="#services" onClick={e => handleClick(e, 'services')} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600">
            Get Started Now
          </a>
        </div>
      </div>
    </section>;
};