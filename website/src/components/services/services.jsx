import React from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  BarChart,
  BookOpen,
  Shield,
  Users,
  FileText,
  TrendingUp,
  Building,
  Briefcase,
  DollarSign,
  PieChart,
  LineChart
} from 'lucide-react';


const Hero = () => {
  return (
    <section className="relative bg-violet-600 py-20 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/acc2.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-violet-600/80 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-violet-100">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};


const ServicesPage = () => {
  const services = [
    {
      icon: <BookOpen />,
      title: "Bookkeeping & Accounting",
      description: "Comprehensive bookkeeping services including accounts payable/receivable, payroll processing, and financial statement preparation.",
      features: [
        "Daily transaction recording",
        "Monthly reconciliations",
        "Payroll management",
        "Financial statements"
      ],
      bgImage: "/acc6.avif" // Replace with actual image
    },
    {
      icon: <Shield />,
      title: "Audit & Assurance",
      description: "Independent audit services to ensure compliance and accuracy in your financial reporting.",
      features: [
        "External audits",
        "Internal control reviews",
        "Compliance audits",
        "Financial statement reviews"
      ],
      bgImage: "/acc7.jpg" // Replace with actual image
    },
    {
      icon: <Calculator />,
      title: "Tax Planning & Preparation",
      description: "Strategic tax planning and preparation services for businesses and individuals.",
      features: [
        "Tax strategy development",
        "Return preparation",
        "Tax compliance",
        "International tax planning"
      ],
      bgImage: "/acc8.jpg" // Replace with actual image
    },
    {
      icon: <TrendingUp />,
      title: "Business Advisory",
      description: "Strategic guidance to help your business grow and succeed in today's competitive market.",
      features: [
        "Growth strategies",
        "Risk management",
        "Performance optimization",
        "Strategic planning"
      ],
      bgImage: "/acc9.jpg" // Replace with actual image
    },
    {
      icon: <Building />,
      title: "Corporate Finance",
      description: "Expert financial guidance for corporate structuring and growth initiatives.",
      features: [
        "Mergers & acquisitions",
        "Capital raising",
        "Financial modeling",
        "Valuation services"
      ],
      bgImage: "/acc10.jpg" // Replace with actual image
    },
    {
      icon: <PieChart />,
      title: "CFO Services",
      description: "Virtual CFO services providing high-level financial strategy and oversight.",
      features: [
        "Financial strategy",
        "Budgeting & forecasting",
        "KPI development",
        "Board reporting"
      ],
      bgImage: "/acc11.jpg" // Replace with actual image
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <Hero />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-xl shadow-lg overflow-hidden group h-full"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/95 backdrop-blur-[2px]" />
                
                {/* Content */}
                <div className="relative p-6">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg inline-block mb-4">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-200 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li 
                        key={i}
                        className="flex items-center text-sm text-slate-200"
                      >
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Button Section */}
                <div className="relative p-4 mt-auto border-t border-white/10">
                  <button className="w-full bg-white/10 backdrop-blur-sm text-white py-2 rounded-lg font-medium 
                    hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              We follow a structured approach to ensure maximum value for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Initial Consultation", description: "We understand your needs" },
              { step: 2, title: "Strategy Development", description: "We create a tailored plan" },
              { step: 3, title: "Implementation", description: "We execute the strategy" },
              { step: 4, title: "Ongoing Support", description: "We provide continuous assistance" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-violet-100 dark:bg-violet-900/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-violet-600 dark:text-violet-400 font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-violet-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-violet-100 mb-8">
              Contact us today for a free consultation and discover how we can help your business thrive.
            </p>
            <button className="bg-white text-violet-600 px-8 py-3 rounded-lg font-medium hover:bg-violet-50 transition-colors">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;