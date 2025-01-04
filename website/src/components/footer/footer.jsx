import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Toaster } from 'sonner';


const Footer = () => (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Vakundi Accountants</h3>
            <p className="text-sm">Your trusted partner in financial excellence and business growth.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['Services', 'About Us', 'Careers', 'Blog'].map(item => (
                <Link key={item} to="/" className="block text-sm hover:text-violet-400">{item}</Link>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <PhoneCall className="h-4 w-4" />
                <span>+263 78 594 8128</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@vakundi.com</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-violet-400"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-violet-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-violet-400"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Vakundi Accountants. All rights reserved.</p>
        </div>
      </div>
    </footer>
);
  
  export default Footer;
  