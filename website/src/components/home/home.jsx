import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Shield, Calculator, BookOpen, LineChart, Users } from 'lucide-react';
import { Trophy, ChartBar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: <BarChart3 className="w-6 h-6" />, name: "Financial Analysis" },
    { icon: <Shield className="w-6 h-6" />, name: "Audit & Assurance" },
    { icon: <Calculator className="w-6 h-6" />, name: "Tax Planning" },
    { icon: <BookOpen className="w-6 h-6" />, name: "Bookkeeping" },
    { icon: <LineChart className="w-6 h-6" />, name: "Business Advisory" },
    { icon: <Users className="w-6 h-6" />, name: "Consulting" }
  ];

  return (
    <div className="relative min-h-screen pt-12">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/home.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 z-10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-20">
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                background: `radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(124,58,237,0) 70%)`,
                transform: `scale(${Math.random() * 2 + 0.5})`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 py-16 lg:py-24 z-30">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-600">
              Vakundi Accountants
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12">
            Excellence in Financial Services & Business Advisory
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="text-violet-400 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {service.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="bg-violet-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-violet-700 transition-colors duration-300" onClick={() => navigate('/contact')}>
            Schedule a Consultation
          </button>
          <button className="bg text-white px-8 py-3 rounded-lg font-medium hover:bg-violet-700 transition-colors duration-300 mx-4 mt-2 border border-violet-600" onClick={() => navigate('/services')}>
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/acc17.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/95 to-violet-800/95 opacity-80" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-80">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
                transform: `scale(${Math.random() * 2 + 0.5})`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-violet-100 mb-8">
            Schedule a consultation with our expert team and discover how we can help you achieve your financial goals.
          </p>
          <motion.button 
            className="bg-white text-violet-600 px-8 py-3 rounded-lg font-medium 
              hover:bg-opacity-90 transition-all duration-300 inline-flex items-center
              shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};


const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trusted Excellence",
      description: "Over 20 years of proven expertise in financial services",
      bgImage: "/acc5.jpg" // Replace with actual image URL
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Award Winning",
      description: "Recognized for outstanding client service and innovation",
      bgImage: "/acc6.avif" // Replace with actual image URL
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client Focused",
      description: "Personalized solutions tailored to your unique needs",
      bgImage: "/acc7.jpg" // Replace with actual image URL
    },
    {
      icon: <ChartBar className="h-8 w-8" />,
      title: "Data Driven",
      description: "Advanced analytics for informed decision making",
      bgImage: "/acc8.jpg" // Replace with actual image URL
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Vakundi Accountants?
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            With decades of experience and a commitment to excellence, we deliver comprehensive financial solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-64 rounded-xl overflow-hidden group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${feature.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-violet-600/80 to-slate-900/90" />

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col items-center justify-center text-center z-10">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg inline-block mb-4">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-100">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      
      {/* Why Choose Us Section */}


      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Don't just take our word for it - hear what our valued clients have to say about their experience with Vakundi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Stella Makava",
                role: "CEO, Tech Innovators",
                image: "/user.png",
                text: "Vakundi has transformed our financial operations. Their expertise and dedication are unmatched."
              },
              {
                name: "Simbarashe Chirandu",
                role: "Founder, Growth Dynamics",
                image: "/user.png",
                text: "The team's attention to detail and strategic advice have been invaluable to our business growth."
              },
              {
                name: "Moses Shamu",
                role: "CFO, Global Solutions",
                image: "/user.png",
                text: "Professional, responsive, and innovative. Vakundi consistently exceeds our expectations."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default HomePage;