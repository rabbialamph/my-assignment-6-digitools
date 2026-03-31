import React from 'react';
import { User, Box, Rocket } from 'lucide-react';

const GetStartedSection = () => {
const steps = [
  {
    id: 1,
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: 'user',
  },
  {
    id: 2,
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: 'box',
  },
  {
    id: 3,
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: 'rocket',
  },
];

const icons = {
  user: User,
  box: Box,
  rocket: Rocket,
};
    return (
      <div className="max-w-[1180px] mx-auto">
      <section className="text-center py-8 px-4">
        <h2 className="text-3xl font-bold mb-2">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mb-10">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = icons[step.icon]; 
            return (
              <div
                key={step.id}
                className="bg-white rounded-xl shadow p-6 relative hover:shadow-lg transition-shadow duration-300"
              >
   
                <span className="absolute flex items-center justify-center rounded-full top-4 right-4 bg-purple-600 text-white text-xs font-bold w-6 h-6 ">
                  {(index + 1).toString().padStart(2, '0')}
                </span>

       
                <div className="bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>

                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
    );
};

export default GetStartedSection;