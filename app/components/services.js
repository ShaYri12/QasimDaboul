"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets and small laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#FFFFFF80] md:py-[160px] py-[60px] max-w-[1280px] mx-auto">
      {/* About Text Section */}
      <div id="services" className="mb-[50px] pt-[20px]">
        <h2 className="text-[22.46px] leading-[26.95px] font-[400] uppercase text-[#6D7D7D] tracking-[6px] text-center">
          SERVICES
        </h2>
        <h1 className="sm:text-[56px] text-[40px] sm:leading-[67.37px] leading-[50px] font-[600] text-primaryColor mb-[23px] mt-[6px] text-center">
          My Core Services
        </h1>
        <p className="max-w-[1011px] mx-auto text-secondaryColor md:text-[20px] text-[19px] font-[400] leading-[30px] text-center">
          Elevate your living or working space with bespoke interior design
          solutions that blend functionality with artistic flair. Let’s create a
          space that not only looks stunning but feels like home.
        </p>
      </div>

      {/* Slick Slider */}
      <Slider {...settings} className="mt-[50px]">
        {/* Card 1 */}
        <div className="p-[10px]">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/assets/services-img1.png"
              alt="Interior plans"
              className="w-full max-h-[500px] object-cover rounded-tr-[100px]"
            />
            <div className="p-[10px] pt-[30px] text-left">
              <h3 className="xl:text-[32px] text-[30px] font-[600] text-primaryColor leading-[38.4px] mb-[20px]">
                Interior plans
              </h3>
              <p className="text-secondaryColor text-[16px] font-[400] leading-[24px] mb-[40px]">
                Transform your space with meticulously crafted interior plans
                that blend style and functionality, tailored to reflect your
                unique personality.
              </p>
              <button className="font-[700] text-[16px] tracking-[6%] leading-[20.8px] text-primaryColor border-[1.5px] border-primaryColor py-[11px] px-[24px] rounded-[6px] hover:bg-gray-100 transition duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-[10px]">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/assets/services-img2.png"
              alt="3D Model Creation"
              className="w-full max-h-[500px] object-cover rounded-t-[100px]"
            />
            <div className="p-[10px] pt-[30px] text-left">
              <h3 className="xl:text-[32px] text-[30px] font-[600] text-primaryColor leading-[38.4px] mb-[20px]">
                3D Model Creation
              </h3>
              <p className="text-secondaryColor text-[16px] font-[400] leading-[24px] mb-[40px]">
                Bring your home design to life with detailed 3D models that
                offer a realistic preview of your interior spaces, ensuring
                every detail is perfect before the project begins.
              </p>
              <button className="font-[700] text-[16px] tracking-[6%] leading-[20.8px] text-primaryColor border-[1.5px] border-primaryColor py-[11px] px-[24px] rounded-[6px] hover:bg-gray-100 transition duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-[10px]">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/assets/services-img3.png"
              alt="Drafting Designs"
              className="w-full max-h-[500px] object-cover rounded-tl-[100px]"
            />
            <div className="p-[10px] pt-[30px] text-left">
              <h3 className="xl:text-[32px] text-[30px] font-[600] text-primaryColor leading-[38.4px] mb-[20px]">
                Drafting Designs
              </h3>
              <p className="text-secondaryColor text-[16px] font-[400] leading-[24px] mb-[40px]">
                Create your dream home with draft designs that capture your
                vision and turn it into a stunning, functional interior. Let's
                bring your ideas to life with personalized design solutions.
              </p>
              <button className="font-[700] text-[16px] tracking-[6%] leading-[20.8px] text-primaryColor border-[1.5px] border-primaryColor py-[11px] px-[24px] rounded-[6px] hover:bg-gray-100 transition duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Services;
