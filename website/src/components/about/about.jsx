import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Heart, Target, MapPin, Calendar } from 'lucide-react';


const ValuesSection = () => {
  const values = [
    {
      icon: <Award />,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do",
      bgImage: "/acc17.jpg" // Replace with actual image
    },
    {
      icon: <Star />,
      title: "Integrity",
      description: "Unwavering commitment to ethical practices",
      bgImage: "/acc18.jpg" // Replace with actual image
    },
    {
      icon: <Heart />,
      title: "Client Focus",
      description: "Putting our clients' needs first",
      bgImage: "/acc19.avif" // Replace with actual image
    },
    {
      icon: <Target />,
      title: "Innovation",
      description: "Embracing new technologies and methods",
      bgImage: "/acc20.jpg" // Replace with actual image
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our Values
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-64 group rounded-xl overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${value.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-violet-900/90 group-hover:from-slate-900/80 group-hover:to-violet-900/95 transition-colors duration-300" />
              
              {/* Content */}
              <div className="relative h-full p-6 flex flex-col items-center justify-center text-center z-10">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg inline-block mb-4 
                  transform group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-200">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const milestones = [
    {
      year: "2005",
      title: "Foundation",
      description: "Vakundi Accountants was established with a vision to provide excellent financial services",
      bgImage: "/acc12.jpg" // Replace with foundation image
    },
    {
      year: "2010",
      title: "Regional Expansion",
      description: "Opened offices in major cities across the country",
      bgImage: "/acc13.avif" // Replace with expansion image
    },
    {
      year: "2015",
      title: "Digital Innovation",
      description: "Launched innovative digital solutions for client services",
      bgImage: "/acc14.avif" // Replace with innovation image
    },
    {
      year: "2020",
      title: "Global Recognition",
      description: "Recognized as one of the top accounting firms in the region",
      bgImage: "/acc16.jpg" // Replace with achievement image
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Key milestones in our history
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-violet-200 via-violet-400 to-violet-200 dark:from-violet-800 dark:via-violet-600 dark:to-violet-800" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="w-1/2" />
                
                {/* Timeline node with pulse effect */}
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center 
                    shadow-lg shadow-violet-600/30">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-full animate-ping bg-violet-600/30" />
                </div>

                <div className={`w-1/2 ${
                  index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'
                }`}>
                  <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${milestone.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-violet-900/90 
                      group-hover:from-slate-900/95 group-hover:to-violet-900/95 transition-colors duration-300" />
                    
                    {/* Content */}
                    <div className="relative p-6">
                      <span className="inline-block bg-violet-600/30 backdrop-blur-sm px-3 py-1 rounded-full 
                        text-violet-200 font-bold mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-200">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Amanda Mangosha",
      role: "Managing Partner",
      image: "/user.png",
      bio: "20+ years of experience in corporate finance and strategic consulting",
      specialties: ["Strategic Planning", "Corporate Finance", "M&A"]
    },
    {
      name: "Josphat Njeri",
      role: "Tax Director",
      image: "/user.png",
      bio: "Expert in international tax planning and compliance",
      specialties: ["International Tax", "Tax Planning", "Compliance"]
    },
    {
      name: "Elizabeth Kariuki",
      role: "Audit Partner",
      image: "/user.png",
      bio: "Specializes in assurance services for tech and healthcare sectors",
      specialties: ["External Audit", "Internal Controls", "Risk Assessment"]
    },
    {
      name: "David Mwangi",
      role: "Advisory Services Head",
      image: "/user.png",
      bio: "Leader in business transformation and growth strategies",
      specialties: ["Business Advisory", "Growth Strategy", "Digital Transformation"]
    }
  ];

  const milestones = [
    {
      year: "2005",
      title: "Foundation",
      description: "Vakundi Accountants was established with a vision to provide excellent financial services"
    },
    {
      year: "2010",
      title: "Regional Expansion",
      description: "Opened offices in major cities across the country"
    },
    {
      year: "2015",
      title: "Digital Innovation",
      description: "Launched innovative digital solutions for client services"
    },
    {
      year: "2020",
      title: "Global Recognition",
      description: "Recognized as one of the top accounting firms in the region"
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
    <section className="relative bg-violet-600 py-24 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image */}
        <img 
          src="/acc1.webp"
          alt="Financial background"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay on top of image */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-violet-800 opacity-90" />
      </div>
      
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-violet-100">
            Two decades of excellence in financial services and counting
          </p>
        </motion.div>
      </div>
    </section>

      {/* Values Section */}
      <ValuesSection />
      <TimelineSection />

      {/* Team Section */}
      

      {/* Timeline Section
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Key milestones in our history
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-violet-200 dark:bg-violet-800" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-1/2" />
                  <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center relative z-10">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'
                  }`}>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                      <span className="text-violet-600 dark:text-violet-400 font-bold">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Office Locations */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Offices
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Find us across major cities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { city: "New York", address: "123 Business Ave, NY 10001" },
              { city: "London", address: "456 Finance St, London EC4M 7JU" },
              { city: "Singapore", address: "789 Market Rd, Singapore 048620" }
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl"
              >
                <div className="flex items-start">
                  <MapPin className="text-violet-600 dark:text-violet-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {office.city}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {office.address}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;