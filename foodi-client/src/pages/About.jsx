import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gradient-to-r from-[#FFFE8E1] to-[#FFD700] p-8 rounded-lg shadow-lg">
        <div className="md:w-1/2 space-y-6 text-center shadow-lg bg-[#006400] p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-[#FFF8E1]">
            About <span className="text-[#FFF8E1]">Foodi</span>
          </h2>
          <p className="text-lg text-[#FFF8E1]">
            Foodi is more than just a food ordering app. It's a platform where
            flavors, cultures, and culinary expertise come together to bring
            you the most delightful and convenient dining experience. Our goal
            is to create a space where everyone can enjoy delicious meals from
            their favorite local restaurants, with just a few clicks.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mt-12 text-center shadow-lg bg-[#006400] p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-[#FFF8E1]">
          Our Mission
        </h3>
        <p className="mt-6 text-lg text-[#FFF8E1] px-8 md:px-32">
          At Foodi, our mission is to connect people with amazing food,
          prepared with passion and served with care. We aim to create a
          seamless experience for our customers, ensuring they enjoy delicious
          meals anytime, anywhere.
        </p>
      </div>

      {/* Values Section */}
      <div className="mt-16 text-center">
        <h4 className="text-xl font-bold text-[#FFF8E1] mb-4">Our Values</h4>
        <div className="shadow-lg bg-[#006400] p-6 rounded-lg">
          <ul className="list-disc list-inside md:px-32">
            <li className="text-lg text-[#FFF8E1]">Quality Ingredients</li>
            <li className="text-lg text-[#FFF8E1]">Passionate Chefs</li>
            <li className="text-lg text-[#FFF8E1]">Convenience & Speed</li>
          </ul>
          <div className="mt-4">
            <p className="text-[#FFF8E1]">
              We prioritize fresh, high-quality ingredients to ensure every meal
              tastes as great as it looks. Our chefs pour their heart and soul into every dish, creating memorable culinary experiences for you. Fast and easy ordering, with meals delivered right to your doorstep without compromising on taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
