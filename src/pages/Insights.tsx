import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight } from 'lucide-react';

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

function Insights() {
  const insights = [
    {
      title: "The Future of SaaS in Enterprise Solutions",
      excerpt: "Exploring how SaaS is transforming enterprise operations and what the future holds.",
      author: "John Smith",
      date: "March 15, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      title: "Sustainable Practices in Modern Hospitality",
      excerpt: "How the hospitality industry is adapting to meet environmental challenges.",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
    },
    {
      title: "Innovation in the Food Service Industry",
      excerpt: "New technologies and trends shaping the future of food service.",
      author: "Mike Wilson",
      date: "March 5, 2024",
      category: "Food & Beverage",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80"
            alt="Insights Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Latest news, trends, and insights from across our industries
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {insight.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
                    <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center mr-4">
                        <User className="w-4 h-4 mr-1" />
                        {insight.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {insight.date}
                      </div>
                    </div>
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

export default Insights;