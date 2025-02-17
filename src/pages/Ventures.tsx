import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, ArrowUpRight } from 'lucide-react';

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

function Ventures() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
            alt="Business Growth"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Ventures</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our portfolio of innovative businesses
          </p>
        </div>
      </section>

      {/* Active Ventures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12">Active Ventures</h2>
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <Code2 className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Koxfin</h3>
                  <p className="text-gray-600 mb-6">
                    Our flagship IT and SaaS solutions company, delivering cutting-edge technology 
                    solutions to businesses worldwide.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <ArrowUpRight className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                      <span className="text-gray-600">Enterprise Software Development</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUpRight className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                      <span className="text-gray-600">Cloud Infrastructure Solutions</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUpRight className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                      <span className="text-gray-600">Digital Transformation Services</span>
                    </li>
                  </ul>
                  <button className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Visit Website <ArrowUpRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                    alt="Koxfin Office"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Upcoming Ventures */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12">Upcoming Ventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
                    alt="Food Chain Venture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Food Chain Venture</h3>
                  <p className="text-gray-600">
                    An innovative food chain concept combining technology with culinary excellence. 
                    Coming soon to revolutionize the dining experience.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
                    alt="Hospitality Venture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hospitality Venture</h3>
                  <p className="text-gray-600">
                    A future-forward hospitality concept that will redefine luxury accommodation 
                    with smart technology integration.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

export default Ventures;