import React, { useState, useEffect } from 'react';
import { Car, Menu, X, Shield, Sparkles, Wrench, MapPin, Phone, Mail, Clock, Star, CheckCircle, Instagram } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="https://6nttc1svbg.ufs.sh/f/3Foo2kvSiUXtMBW87rZtCx5ZAjGgu3i0WlwBneYP819FQaSL"
                alt="DMV Auto Details Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full"
              />
              <span className="text-white text-lg sm:text-2xl font-bold">DMV Auto Details</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#about" className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                About
              </a>
              <a href="#services" className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                Services
              </a>
              <a href="#contact" className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                Contact
              </a>
              <a
                style={{float: 'none'}}
                id="Setmore_button_iframe"
                href="https://jadensdetailing.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
              >
                Book Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#home" className="block text-white hover:text-red-400 transition-colors duration-300 py-2">
                Home
              </a>
              <a href="#about" className="block text-white hover:text-red-400 transition-colors duration-300 py-2">
                About
              </a>
              <a href="#services" className="block text-white hover:text-red-400 transition-colors duration-300 py-2">
                Services
              </a>
              <a href="#contact" className="block text-white hover:text-red-400 transition-colors duration-300 py-2">
                Contact
              </a>
              <a
                style={{float: 'none'}}
                id="Setmore_button_iframe"
                href="https://jadensdetailing.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-red-400 hover:to-red-500 transition-all duration-300 mt-4 inline-block text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0"
        style={{
          backgroundImage: 'url("https://6nttc1svbg.ufs.sh/f/3Foo2kvSiUXt9lWSATJPQK4UVjS5LWqkiXFz2OJIfc1TNZaM")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Mobile-friendly overlay */}
        <div className="absolute inset-0 bg-black/20 sm:bg-gradient-to-r sm:from-black/25 sm:via-black/10 sm:to-black/25"></div>
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Premium Car
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                Detailing
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              Experience the ultimate in automotive luxury. Our expert team delivers 
              <span className="text-red-400 font-medium"> world-class detailing services </span>
              that exceed expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <a
                style={{float: 'none'}}
                id="Setmore_button_iframe"
                href="https://jadensdetailing.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1 hover:scale-105 inline-block"
              >
                Book Now
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              
              <a
                href="#services"
                className="group border-2 border-white/30 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm inline-block"
              >
                View Services
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
            
            {/* Company Highlights */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">10+</div>
                  <div className="text-white/80 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">5000+</div>
                  <div className="text-white/80 font-medium">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
                  <div className="text-white/80 font-medium">Satisfaction Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: 'url("https://6nttc1svbg.ufs.sh/f/3Foo2kvSiUXte98Khq6B56cXF8QEldnHvZ2tD3CwmeLyTSax")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/65 to-slate-900/75"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0 text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">DMV Auto Details</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Located in the United States, I specialize in premium car detailing services that bring out the best in your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate opacity-0">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
                    <p className="text-gray-300">We use only the finest products and techniques to ensure your vehicle receives the best care possible.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">My Experience</h3>
                    <p className="text-gray-300">I bring 3 years of experience and meticulous attention to detail to every project.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">100% Satisfaction</h3>
                    <p className="text-gray-300">We stand behind our work with a complete satisfaction guarantee on all services.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-animate opacity-0">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-200">Professional facility in the United States</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-200">3 years of dedicated detailing experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-200">Premium products and cutting-edge techniques</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-200">Flexible scheduling and competitive pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: 'url("https://6nttc1svbg.ufs.sh/f/3Foo2kvSiUXtYzSZLXH3M75J6aEhpmq2x9buvkiZtGBK0ewI")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0 text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional car detailing services that restore your vehicle's beauty and protect its finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Detailing */}
            <div className="scroll-animate opacity-0 group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Detailing</h3>
                <p className="text-gray-300 mb-6">Professional detailing services that restore your vehicle's showroom shine and protect its finish.</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Exterior hand wash & wax</li>
                  <li>• Interior deep cleaning</li>
                  <li>• Paint decontamination</li>
                  <li>• Protection application</li>
                </ul>
              </div>
            </div>

            {/* Paint Correction */}
            <div className="scroll-animate opacity-0 group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Paint Correction</h3>
                <p className="text-gray-300 mb-6">Advanced paint correction techniques to remove swirls, scratches, and imperfections.</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Swirl mark removal</li>
                  <li>• Scratch repair</li>
                  <li>• Multi-stage polishing</li>
                  <li>• Paint restoration</li>
                </ul>
              </div>
            </div>

            {/* Ceramic Coating */}
            <div className="scroll-animate opacity-0 group relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Coming 2026
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ceramic Coating</h3>
                <p className="text-gray-300 mb-6">Long-lasting ceramic protection that shields your paint from the elements.</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• 9H hardness protection</li>
                  <li>• Hydrophobic coating</li>
                  <li>• UV protection</li>
                  <li>• Multi-year warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/65 to-slate-900/75"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0 text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Book Your <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Appointment</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your vehicle? Schedule your appointment today and experience the DMV Auto Details difference.
            </p>
          </div>

          <div className="scroll-animate opacity-0">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Schedule Your Service Online</h3>
                  <p className="text-gray-300">Click the button below to book your appointment through our secure booking system.</p>
                </div>
                <div className="flex justify-center">
                  <a
                    style={{float: 'none'}}
                    id="Setmore_button_iframe"
                    href="https://jadensdetailing.setmore.com"
                    className="inline-block transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      border="none"
                      src="https://assets.setmore.com/integration/images/newdesign/others/book-now-button.svg"
                      alt="Book an appointment with Shine & Drive Detailing using Setmore"
                      className="h-12 hover:opacity-90 transition-opacity duration-300"
                    />
                  </a>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p>Or call me directly at <span className="text-red-400 font-medium">+1 571-500-3440</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/6872149/pexels-photo-6872149.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0 text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Located in the United States. Reach out to me, and I'm here to answer your questions and provide exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="scroll-animate opacity-0">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300">United States</p>
                    <p className="text-gray-400 text-sm mt-1">Serving the United States and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+1 571-500-3440</p>
                    <p className="text-gray-400 text-sm mt-1">Call us for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">youremail@gmail.com</p>
                    <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: Closed</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="scroll-animate opacity-0">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                <form className="space-y-6" onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setSubmitStatus('idle');

                  try {
                    const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
                    const response = await fetch(apiUrl, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
                      },
                      body: JSON.stringify(formData),
                    });

                    if (response.ok) {
                      setSubmitStatus('success');
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    } else {
                      setSubmitStatus('error');
                    }
                  } catch (error) {
                    console.error('Error submitting form:', error);
                    setSubmitStatus('error');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}>
                  <div>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  {submitStatus === 'success' && (
                    <div className="text-green-400 text-sm font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-red-400 text-sm font-medium">
                      Failed to send message. Please try again.
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-gray-300 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://6nttc1svbg.ufs.sh/f/3Foo2kvSiUXtMBW87rZtCx5ZAjGgu3i0WlwBneYP819FQaSL"
                  alt="DMV Auto Details Logo"
                  className="h-10 w-10 object-cover rounded-full"
                />
                <span className="text-white text-xl font-bold">DMV Auto Details</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for premium automotive detailing services in the United States.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-red-400 transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-red-400 transition-colors duration-300">About</a></li>
                <li><a href="#services" className="hover:text-red-400 transition-colors duration-300">Services</a></li>
                <li><a href="#contact" className="hover:text-red-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 text-red-400 flex-shrink-0" />
                  <span>United States</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 mt-1 text-red-400 flex-shrink-0" />
                  <span>+1 571-500-3440</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 mt-1 text-red-400 flex-shrink-0" />
                  <span>youremail@gmail.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 mt-1 text-red-400 flex-shrink-0" />
                  <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Instagram className="w-4 h-4 mt-1 text-red-400 flex-shrink-0" />
                  <a
                    href="https://www.instagram.com/your_ınstagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400 transition-colors duration-300"
                  >
                    @your_ınstagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} DMV Auto Details. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;