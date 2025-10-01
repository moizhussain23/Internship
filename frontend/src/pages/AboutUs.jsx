import React from 'react';
import logo from '../assets/logo.webp';
import abovefooter from '../assets/abovefooter.webp';
import aboutus from '../assets/aboutus.webp';
import PhotoGallery from './components/PhotoGallery';
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';

function AboutUs() {
  return (
    <>
      <Header />
      <div>
        <section class="flex flex-col md:flex-row w-full">

          <div class="w-full md:w-1/2">
            <img
              src={abovefooter}
              alt="Smiling stylist in salon"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="w-full md:w-1/2 bg-stone-100 flex items-center p-8 md:p-16">
            <div class="max-w-lg">
              <h3 class="uppercase text-gray-700 tracking-wider text-sm font-medium mb-6">ABOUT US</h3>

              <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-8">
                Why We are the Best?
              </h2>

              <p class="text-gray-600 text-lg leading-relaxed">
                We are here for you and excited to serve you as you trust us with your look. Let's collaborate on your vision to make it come alive.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div>

        <section className="bg-white py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Text Section */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">About Us</h2>
              <p className="text-gray-600 leading-relaxed">
                We created this space with you in mind, for your time with us to be calming and invigorating.
                It’s your time to rest easy in our salon home. But before you’re gone, pay our photo booth a visit
                and you’ll be so glad you did. We are here for you and excited to serve you as you trust us with your look.
                Let’s collaborate on your vision to make it come alive.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="w-full h-[450px] overflow-hidden rounded-lg shadow-lg">
                <img
                  src={aboutus}
                  alt="Beauty Salon"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Effect */}
              <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-md"></div>
            </div>

          </div>
        </section>

      </div>

      <div>
        <PhotoGallery />
        <Form />
        <Footer />

      </div>

    </>


  );
}

export default AboutUs;