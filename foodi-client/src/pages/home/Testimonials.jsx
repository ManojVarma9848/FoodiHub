/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img 
            src="/images/home/testimonials/testimonials.png" 
            alt="" 
            className="border-2 border-gray-300 rounded-lg w-2/5 md:w-1/2 mb-0" // Removed margin below the image
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle mb-0">Testimonials</p> {/* Removed margin below subtitle */}
            <h2 className="title mt-2">What Our Customers Say About Us</h2> {/* Added margin-top for spacing */}
            <blockquote className="my-5 text-secondary leading-[30px]">
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </blockquote>
           
           {/* avatar */}
           <div className="flex items-center gap-4 flex-wrap">
           <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/images/home/testimonials/testimonial1.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/images/home/testimonials/testimonial2.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/images/home/testimonials/testimonial3.png" />
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <h5 className="text-lg font-semibold">Customer Feedback</h5>
              <div className="flex items-center gap-2">
                <FaStar className="text-pink-400"/> 
                <span className="font-medium">4.9</span> 
                <span className="text-[#807E7E]">(18.6k Reviews)</span>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
