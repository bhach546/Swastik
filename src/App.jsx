import React, { useState, useEffect } from 'react';
import { Pizza, Beef, ChevronLeft, ChevronRight, Menu, X, Clock, MapPin, Phone } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const carouselImages = [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=2070",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex space-x-1">
                <Pizza className="h-8 w-8 text-red-600" />
                <Beef className="h-8 w-8 text-amber-700" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">Swastik Pizza & Burgers</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a href="#" className="text-red-600 font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Menu</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Order Online</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-red-600 font-medium">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">Menu</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">Order Online</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Carousel */}
      <div className="relative h-[600px] mt-16">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>

        {/* Carousel Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Crafted with Passion</h1>
            <p className="text-xl md:text-2xl mb-8">Artisanal Pizzas & Gourmet Burgers</p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors">
              Order Online
            </button>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="bg-red-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-red-600 mb-2" />
              <h3 className="font-semibold text-gray-900">Opening Hours</h3>
              <p className="text-gray-600">Mon-Sun: 11:00 AM - 11:00 PM</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-red-600 mb-2" />
              <h3 className="font-semibold text-gray-900">Location</h3>
              <p className="text-gray-600">456 Food Street, Flavor City</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-red-600 mb-2" />
              <h3 className="font-semibold text-gray-900">Order Now</h3>
              <p className="text-gray-600">+1 (555) 987-6543</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialties</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From wood-fired pizzas to juicy gourmet burgers, we use only the finest ingredients
            to create unforgettable flavors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=635"
              alt="Pizza"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Artisanal Pizzas</h3>
            <p className="text-gray-600">
              Hand-tossed pizzas baked in our wood-fired oven with premium toppings and homemade sauce.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a7e0b1d?auto=format&fit=crop&q=80&w=635"
              alt="Burger"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Gourmet Burgers</h3>
            <p className="text-gray-600">
              Premium beef patties with fresh ingredients and our secret sauce blend.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=635"
              alt="Sides"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect Sides</h3>
            <p className="text-gray-600">
              Crispy fries, onion rings, and other delicious sides to complete your meal.
            </p>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Today's Special</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Buy any large pizza and get a regular burger at 50% off!
                </p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=1470"
                  alt="Special Offer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Hungry? We've Got You Covered</h2>
          <p className="text-xl text-gray-300 mb-8">
            Order now and get your food delivered in 30 minutes or less
          </p>
          <div className="space-x-4">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors">
              Order Delivery
            </button>
            <button className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;