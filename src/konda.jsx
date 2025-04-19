import React from "react";
import img1 from './assets/image1.png'
function Konda() {
  return (
    <main className="font-sans text-gray-800">
      {/* Header Section */}
      <header className="bg-white shadow p-4">
        <div className="flex items-baseline justify-between">
          <div className="flex flex-col relative">
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
              <img 
                src="/logo.png"  // Make sure your logo is saved as 'logo.png' in the 'public' folder
                alt="Swastik Group Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            <div 
              className="text-5xl font-bold text-blue-600" 
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              SWASTIK
            </div>
            <div className="text-lg font-semibold tracking-wider">
              --GROUP LIMITED--
            </div>
          </div>
          <p className="text-sm text-gray-500 self-end">
            Introducing Global Food Brands to the UK
          </p>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white py-3">
        <ul className="flex justify-end space-x-6 px-4">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#ventures" className="hover:text-gray-300">Our Ventures</a></li>
          <li><a href="#vision" className="hover:text-gray-300">Vision & Mission</a></li>
          <li><a href="#testimonials" className="hover:text-gray-300">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-cover bg-center text-white h-96 flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <h1 className="text-4xl font-bold mb-4">Global Flavours. Local Presence.</h1>
        <p className="text-lg mb-6">Bringing international food experiences to your doorstep in the UK.</p>
        {/* <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white transition-colors">
          Discover More
        </button> */}
      </section>

      {/* About Us */}
      <section id="about" className="p-8 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Us</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-justify indent-8 leading-relaxed">
            Swastik Group Limited is a UK-based company passionate about revolutionizing the food scene. 
            We aim to introduce a wide variety of global food brands to local communities, 
            starting with our successful Caprinos Pizza franchise. Our goal is to celebrate 
            global flavours while supporting sustainable and scalable food ventures across the UK.
          </p>
        </div>
      </section>

      {/* Our Ventures */}
      <section id="ventures" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Ventures</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 shadow rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Caprinos Pizza</h3>
            <p className="text-gray-600">
              Premium pizza brand offering high-quality pizzas and great service in Sheffield.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">New Food Concepts</h3>
            <p className="text-gray-600">
              Exploring international street food and emerging restaurant trends to bring them to the UK.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Franchise Expansion</h3>
            <p className="text-gray-600">
              Working to bring internationally recognized food franchises to the UK market.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="p-8 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-center">Vision & Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-red-600">Mission</h3>
            <p>
              To introduce and manage global food ventures that provide high-quality, 
              diverse, and affordable food options.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-red-600">Vision</h3>
            <p>
              To become a leading name in bringing innovative and culturally diverse 
              food brands to the UK, enriching local food scenes with exciting new choices.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 shadow rounded-lg">
            <p className="italic text-gray-700">
              "Caprinos by Swastik is amazing – fast, fresh, and delicious!"
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <p className="italic text-gray-700">
              "Love that they're bringing new food experiences to our city!"
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="p-8 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">Founder's Note</h2>
        <div className="max-w-3xl mx-auto">
          <p className="italic font-bold text-center text-gray-700 text-lg">
            "Swastik Group was founded on a simple idea: people connect through food. 
            By bringing global flavours to the UK, we're building more than just businesses — 
            we're building community and culture."
          </p>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <div className="mb-6 text-center">
            <p>Email: info@swastikgroupltd.com</p>
            <p>Address: 4 Suffolk Road, Sheffield, England, S2 4AF</p>
            <p>Phone: +44 7584483286</p>
          </div>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
            />
            <textarea 
              placeholder="Your Message" 
              rows="4"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button 
              type="submit" 
              className="w-full py-3 bg-red-600 hover:bg-red-700 rounded text-white font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center mb-4">© 2024 Swastik Group Limited. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Facebook</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Konda;
