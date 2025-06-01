import React from 'react';
import { HeartPulseIcon, ShieldCheckIcon, PaintbrushIcon, TruckIcon, GraduationCapIcon, BoxIcon } from 'lucide-react';
const services = [{
  title: 'Equipment Rental',
  description: 'High-quality equipment rental for construction, events, and more. Daily, weekly, and monthly rates available.',
  icon: BoxIcon,
  bgColor: 'bg-orange-100',
  iconColor: 'text-orange-500'
}, {
  title: 'Nursing Services',
  description: 'Professional healthcare providers for in-home care, hospital support, and medical facilities.',
  icon: HeartPulseIcon,
  bgColor: 'bg-blue-100',
  iconColor: 'text-blue-600'
}, {
  title: 'Security Services',
  description: 'Trained security personnel for events, businesses, and residential properties. 24/7 availability.',
  icon: ShieldCheckIcon,
  bgColor: 'bg-orange-100',
  iconColor: 'text-orange-500'
}, {
  title: 'Makeup Artists',
  description: 'Professional makeup services for weddings, special events, photoshoots, and productions.',
  icon: PaintbrushIcon,
  bgColor: 'bg-blue-100',
  iconColor: 'text-blue-600'
}, {
  title: 'Transport Services',
  description: 'Reliable transportation solutions for individuals, groups, and cargo. Local and long-distance options.',
  icon: TruckIcon,
  bgColor: 'bg-orange-100',
  iconColor: 'text-orange-500'
}, {
  title: 'Education Services',
  description: 'Tutoring, training, and educational support for students of all ages and professionals.',
  icon: GraduationCapIcon,
  bgColor: 'bg-blue-100',
  iconColor: 'text-blue-600'
}];
export const ServicesSection = () => {
  return <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need under one roof
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className={`w-12 h-12 rounded-md ${service.bgColor} flex items-center justify-center mb-4`}>
                  <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {service.description}
                </p>
                <div className="mt-4">
                  <a href="#" className={`text-sm font-medium ${service.iconColor} hover:underline`}>
                    Learn more &rarr;
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};