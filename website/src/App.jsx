import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navigation from './components/nav/nav';
import LoadingSpinner from './components/loading/loading';
import { useState, useEffect } from 'react';
import Footer from './components/footer/footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved preference or system preference
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return saved ? JSON.parse(saved) : prefersDark;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};
const NavWrapper = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navigation 
      isMenuOpen={isMenuOpen} 
      setIsMenuOpen={setIsMenuOpen} 
    />
  );
};


// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./components/home/home'));
const ServicesPage = React.lazy(() => import('./components/services/services'));
const AboutPage = React.lazy(() => import('./components/about/about'));
const ContactPage = React.lazy(() => import('./components/contact/contact'));
const NotFoundPage = React.lazy(() => import('./components/not-found/notfound'));

const App = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <Toaster position="top-center" />
        <ScrollToTop />
        <NavWrapper />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;