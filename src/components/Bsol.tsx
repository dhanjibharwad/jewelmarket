import React from 'react';
import { CreditCard, Grid3x3, RefreshCcw, MessageSquare } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title }) => (
  <div className="flex items-start gap-3">
    <div className="text-amber-800 flex-shrink-0">
      {icon}
    </div>
    <p className="text-white text-sm md:text-base">{title}</p>
  </div>
);

const BusinessConsultationSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#1a3a5c] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Need a professional Jeweler consultation? Look no further. We are here to help!
            </h2>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
             We offer expert advice, personalized guidance, and elegant solutions to help you choose the perfect jewellery that matches your style, occasion, and budget. {/* We offer a professional advice, guidance and actionable solutions to businesses experiencing issues they can't deal with in-house. */}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-amber-800 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded transition-colors duration-200">
                Get free consultation
              </button>
              {/* <button className="text-white hover:text-yellow-400 font-medium px-6 py-3 rounded flex items-center gap-2 transition-colors duration-200">
                Shop online guides
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button> */}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-end">
            {/* Main Container with rounded border */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Top Image - Office workspace with rounded border */}
              <div className="relative rounded-[40px] overflow-hidden border-[6px] border-amber-800 bg-white shadow-2xl">
                <img 
                  src="/images/gold.jpg" 
                  alt="Modern office workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom Right Image - Business consultant - Overlapping and protruding */}
              <div className="absolute -bottom-8 -right-32 w-[280px] h-[250px] rounded-[30px] overflow-hidden border-[6px] border-amber-800 bg-white shadow-2xl">
                <img 
                  src="/images/jewell.jpg" 
                  alt="Business consultant working" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Feature
            icon={<CreditCard className="w-8 h-8" />}
            title="A team of leading industry experts"
          />
          <Feature
            icon={<Grid3x3 className="w-8 h-8" />}
            title="A full range of consulting services"
          />
          <Feature
            icon={<RefreshCcw className="w-8 h-8" />}
            title="Exclusive extensive online consulting guides"
          />
          <Feature
            icon={<MessageSquare className="w-8 h-8" />}
            title="100% free first consultation for all new clients"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessConsultationSection;