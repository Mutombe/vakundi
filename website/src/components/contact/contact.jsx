import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ChevronDown,
  Send,
  Loader2
} from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative bg-violet-600 py-20 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/acc4.jpg")',
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
            Get in Touch
          </h1>
          <p className="text-xl text-violet-100">
            We're here to help with your financial needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const locations = [
    {
      city: "Harare",
      address: "123 Main Street, Harare 00100",
      phone: "+263 78 594 8128",
      email: "harare@vakundi.com",
      hours: "Mon-Fri: 9AM-6PM"
    },
    {
      city: "Masvingo",
      address: "456 Park Avenue, Masvingo 00200",
      phone: "+263 78 594 8128",
      email: "masvingo@vakundi.com",
      hours: "Mon-Fri: 9AM-6PM"
    },
    {
      city: "Victoria Falls",
      address: "789 Elm Street, Victoria Falls 00300",
      phone: "+263 78 594 8128",
      email: "vicfalls@vakundi.com",
      hours: "Mon-Fri: 9AM-6PM"
    }
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of financial services including bookkeeping, tax planning, audit & assurance, business advisory, and more. Each service is tailored to meet your specific needs."
    },
    {
      question: "How do I schedule a consultation?",
      answer: "You can schedule a consultation by filling out our contact form, calling our office directly, or sending us an email. We'll respond within 24 hours to set up a meeting."
    },
    {
      question: "What are your fees?",
      answer: "Our fees vary based on the services required and the complexity of your needs. We provide transparent pricing and will discuss all fees during our initial consultation."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we have extensive experience working with international clients and can provide services across multiple jurisdictions through our global network."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Methods */}
      <section className="py-12 pt-40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20">
            {[
              { icon: <Phone />, title: "Call Us", info: "+263 78 594 8128" },
              { icon: <Mail />, title: "Email Us", info: "contact@vakundi.com" },
              { icon: <MessageCircle />, title: "Live Chat", info: "Available 24/7" }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center">
                  <div className="bg-violet-100 dark:bg-violet-900/50 p-3 rounded-lg">
                    <div className="text-violet-600 dark:text-violet-400">
                      {method.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {method.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {method.info}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="tax">Tax Services</option>
                      <option value="audit">Audit & Assurance</option>
                      <option value="advisory">Business Advisory</option>
                      <option value="bookkeeping">Bookkeeping</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-violet-600 text-white py-3 rounded-lg font-medium hover:bg-violet-700 transition-colors flex items-center justify-center"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {locations.map((location, index) => (
                <div
                  key={location.city}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {location.city}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-1" />
                      <p className="ml-3 text-slate-600 dark:text-slate-300">
                        {location.address}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-1" />
                      <p className="ml-3 text-slate-600 dark:text-slate-300">
                        {location.phone}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-1" />
                      <p className="ml-3 text-slate-600 dark:text-slate-300">
                        {location.email}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-1" />
                      <p className="ml-3 text-slate-600 dark:text-slate-300">
                        {location.hours}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Find quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="font-medium text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform ${
                      activeAccordion === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-white dark:bg-slate-800 rounded-b-lg"
                  >
                    <p className="text-slate-600 dark:text-slate-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;