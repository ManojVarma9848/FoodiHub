import React from "react";
import bannerImg from "/images/home/bannerImg.webp";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FFFE8E1] to-[#FFFE8E1] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        {/* img */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={bannerImg}
            alt=""
            className="w-full md:w-3/4 rounded-5xl border-4 border-amber-700 mt-8"
          />
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-[#006400] animate-fade-in">
            Dive into Delights Of Delectable{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-[#FF6347] text-xl animate-fade-in-delay">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
