import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, UtensilsCrossed, Hotel, ArrowRight } from 'lucide-react';

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

function Sectors() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Sectors</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driving innovation and excellence across multiple industries
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {/* IT & SaaS Solutions */}
            <FadeInSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Code2 className="w-12 h-12 text-blue-600 mb-4" />
                  <h2 className="text-3xl font-bold mb-4">IT & SaaS Solutions</h2>
                  <p className="text-gray-600 mb-6">
                    Through Koxfin, we deliver cutting-edge IT and SaaS solutions that help businesses 
                    transform their digital presence and operational efficiency.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-600">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                      Enterprise Software Solutions
                    </li>
                    <li className="flex items-center text-gray-600">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                      Cloud Infrastructure Services
                    </li>
                    <li className="flex items-center text-gray-600">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                      Digital Transformation Consulting
                    </li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                    alt="IT Solutions"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </FadeInSection>

            {/* Food Chain */}
            <FadeInSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <UtensilsCrossed className="w-12 h-12 text-blue-600 mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Food Chain (Coming Soon)</h2>
                  <p className="text-gray-600 mb-6">
                    Our upcoming food chain venture aims to revolutionize the culinary industry 
                    with innovative dining concepts and sustainable practices.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-600">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                      Innovative Dining Concepts
                    </li>
                    <li className="flex items-center text-gray-600">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                      Sustainable Food Practices
                    </li>
                    <li className="flex items-center text-gray-600">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                      Tech-Enabled Operations
                    </li>
                  </ul>
                </div>
                <div className="md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
                    alt="Food Chain"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </FadeInSection>

            {/* Hospitality */}
            <FadeInSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Hotel className="w-12 h-12 text-blue-600 mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Hospitality (Coming Soon)</h2>
                  <p className="text-gray-600 mb-6">
                    Our future hospitality ventures will combine luxury with technology to create 
                    unique and memorable experiences for our guests.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-600">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                      Luxury Accommodations
                    </li>
                    <li className="flex items-center text-gray-600">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                      Smart Hotel Solutions
                    </li>
                    <li className="flex items-center text-gray-600">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                      Experiential Tourism
                    </li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
                    alt="Hospitality"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sectors;