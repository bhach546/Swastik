import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import React, { useEffect, useRef } from "react";
import img1 from "./assets/image1.png";
import swas from "./assets/logo.png";
function Konda() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    ventures: useRef(null),
    vision: useRef(null),
    founder: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    // Handle initial hash URL
    const hash = window.location.hash.replace('#', '');
    if (hash && sectionRefs[hash]) {
      scrollToSection(hash);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId]?.current;
    if (section) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const offset = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      
      // Update URL without reload
      window.history.replaceState(null, null, `#${sectionId}`);
    }
  };

  return (
    <main className="font-sans text-gray-800 select-none">
      {/* Header Section */}
      <header className="bg-white shadow-sm sticky top-0 z-50" ref={sectionRefs.home}>
        <div className="container mx-auto px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img
                src={swas}
                alt="Swastik Group Logo"
                className="h-20 w-20 sm:h-20 sm:w-20 object-contain"
                style={{height:"250px",width:"400px",marginLeft:"-80px"}}

              />
              {/* <div className="text-3xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-serif">
                SWASTIK GROUP LIMITED
              </div> */}
            </div>
            <p className="text-xs sm:text-sm text-gray-600 font-medium tracking-wide text-center md:text-right" style={{marginTop:"60px"}}>
              Introducing Global Food Brands to the UK
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white py-3 border-b border-gray-200" style={{marginTop:"-50px",position:"fixed",width:'100%',zIndex:"99"}}>
        <div className="container mx-auto px-4 sm:px-6">
          <ul className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 text-xs sm:text-sm font-medium">
            {['home', 'about', 'ventures', 'vision', 'founder', 'testimonials', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="hover:text-teal-400 transition-colors duration-300 px-2 py-1 capitalize"
                >
                  {item === 'founder' ? "Founder's Note" : item.replace(/-/g, ' ')}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[50vh] sm:h-[32rem] text-white flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${img1})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
        ref={sectionRefs.home}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center" data-aos="zoom-in">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Global Flavours.<br />
            <span className="bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
              Local Presence.
            </span>
          </h1>
          <p className="text-sm sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Bringing international food experiences to your doorstep in the UK.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section
        id="about"
        className="py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50"
        data-aos="fade-up"
        ref={sectionRefs.about}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            About Us
          </h2>
          <div className="text-justify leading-relaxed space-y-4 sm:space-y-6 text-gray-600">
            <p className="border-l-2 sm:border-l-4 border-teal-500 pl-4 sm:pl-6 text-sm sm:text-base">
              Swastik Group Limited is a UK-based enterprise driven by a passion to transform the culinary landscape. We specialize in bringing international food brands closer to British homes and communities. Our journey began with Caprinos Pizza, a successful franchise that's just the beginning of our expansive vision.
            </p>
            <p className="border-l-2 sm:border-l-4 border-blue-500 pl-4 sm:pl-6 text-sm sm:text-base">
              We believe food is more than just sustenance—it's a cultural bridge. That’s why we focus on offering authentic experiences by introducing renowned global flavors, all while maintaining local relevance and quality assurance.
            </p>
            <p className="border-l-2 sm:border-l-4 border-teal-500 pl-4 sm:pl-6 text-sm sm:text-base">
              Looking ahead, Swastik Group is committed to innovation, inclusivity, and integrity as we expand our reach and redefine the food experience in the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Our Ventures */}
      <section
        id="ventures"
        className="py-12 sm:py-20 bg-gray-50"
        data-aos="fade-up"
        ref={sectionRefs.ventures}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            Our Ventures & Future Plans
          </h2>
          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Caprinos Pizza",
                desc: "Premium pizzas crafted with fresh, high-quality ingredients and fast, friendly service. Operating in Sheffield with ambitious plans to scale nationwide."
              },
              {
                title: "New Food Concepts",
                desc: "We embrace culinary creativity—bringing street food and contemporary food trends into modern formats to wow UK audiences."
              },
              {
                title: "Franchise Expansion",
                desc: "We actively seek international food franchises to introduce into the UK market, offering support from setup to sustained operations."
              },
              {
                title: "Sustainable Food Solutions",
                desc: "Championing green initiatives through local sourcing, reducing food waste, and adopting biodegradable, recyclable packaging solutions."
              }
            ].map((venture, idx) => (
              <div 
                key={idx}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-800">
                  <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                    {venture.title}
                  </span>
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {venture.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        id="vision"
        className="py-12 sm:py-20 bg-gradient-to-b from-gray-100 to-white"
        data-aos="fade-up"
        ref={sectionRefs.vision}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            Vision & Mission
          </h2>
          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border-t-2 sm:border-t-4 border-teal-500">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-800">Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To introduce and manage global food ventures offering high-quality, diverse, and sustainable food experiences across the UK, setting new standards in taste and service.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border-t-2 sm:border-t-4 border-blue-500">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-800">Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To become the UK’s leading cultural food connector—bringing the world’s most loved brands and innovative food concepts to every community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section
        id="founder"
        className="py-12 sm:py-20 bg-white"
        data-aos="fade-up"
        ref={sectionRefs.founder}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            Founder's Note
          </h2>
          <div className="space-y-4 sm:space-y-6 text-gray-600 border-l-2 sm:border-l-4 border-teal-500 pl-4 sm:pl-6">
            <p className="text-sm sm:text-base">
              At Swastik Group Limited, our journey is deeply personal. We started with a single vision—to make high-quality, culturally rich food accessible to every household in the UK. What began as a dream is now taking shape into something much bigger.
            </p>
            <p className="text-sm sm:text-base">
              Every venture we launch is built on values of trust, taste, and tradition. We are more than a business—we are a bridge between cultures, a story of growth, and a celebration of culinary diversity.
            </p>
            <p className="text-sm sm:text-base">
              Thank you for being a part of our vision. The best is yet to come.
            </p>
            <p className="text-right font-semibold text-gray-800 text-sm sm:text-base">
              – Founder, Swastik Group Limited
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-12 sm:py-20 bg-gray-50"
        data-aos="fade-up"
        ref={sectionRefs.testimonials}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            What Our Customers Say
          </h2>
          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <p className="italic text-gray-600 text-sm sm:text-base">"Caprinos by Swastik is amazing – fast, fresh, and delicious!"</p>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <p className="italic text-gray-600 text-sm sm:text-base">"The food is always of the highest quality, and the service is second to none."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section
        id="contact"
        className="py-12 sm:py-20 bg-gradient-to-b from-gray-100 to-white"
        data-aos="fade-up"
        ref={sectionRefs.contact}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            Contact Us
          </h2>
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 text-gray-600">
              <div className="flex items-center space-x-2 whitespace-nowrap text-sm sm:text-base">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/>
                </svg>
                <a href="mailto:info@swastikgroupltd.com" className="hover:underline hover:text-blue-600">
                  info@swastikgroupltd.com
                </a>
              </div>

              <div className="hidden sm:block h-6 w-px bg-gray-300"></div>

              <div className="flex items-center space-x-2 whitespace-nowrap text-sm sm:text-base">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                </svg>
                <span>4 Suffolk Road, Sheffield, S2 4AF</span>
              </div>

              <div className="hidden sm:block h-6 w-px bg-gray-300"></div>

              <div className="flex items-center space-x-2 whitespace-nowrap text-sm sm:text-base">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884z"/>
                </svg>
                <a href="tel:+447584483286" className="hover:underline hover:text-blue-600">
                  +44 7584483286
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4 text-center text-sm">
  © {new Date().getFullYear()} Swastik Group Limited. All rights reserved.
</footer>

    </main>
  );
}

export default Konda;