import React from "react";
import headerImg from "../assets/images/section_title.jpg";
import { GroupIcon, Handshake, Landmark, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="pt-10 mt-10">
      <div className="relative h-64">
        <img src={headerImg} alt="" className="w-full object-cover h-64" />
        <div className="h-64 flex items-center justify-center absolute top-0 w-full z-20">
          <h3 className="text-4xl text-center uppercase font-bold text-white relative">
            About Us
          </h3>
        </div>
        <div className="bg-black w-full h-full opacity-60 absolute top-0"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-3 py-5">
          <h3 className="text-4xl font-bold text-black/80 uppercase">
            our mission
          </h3>
          <p className="text-gray-500 leading-8">
            Our mission is to ensure a stable and safe supply of blood and blood
            products for the community by encouraging voluntary blood donations,
            providing exceptional care to donors, and fostering a culture of
            life-saving generosity.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 py-5">
          <div className="border space-y-3 py-5 px-6 relative">
            <span className="absolute -top-5 border p-1.5 icon-bg text-white">
              <Users size={30} />
            </span>
            <h4 className="text-3xl flex flex-col gap-3">Volunteering</h4>
            <p className="text-gray-500 leading-8">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <div className="border space-y-3 py-5 px-6 relative">
            <span className="absolute -top-5 border p-1.5 icon-bg text-white">
              <Landmark size={30} />
            </span>
            <h4 className="text-3xl flex flex-col gap-3">Fundraising</h4>
            <p className="text-gray-500 leading-8">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <div className="border space-y-3 py-5 px-6 relative">
            <span className="absolute -top-5 border p-1.5 icon-bg text-white">
              <Handshake size={30} />
            </span>
            <h4 className="text-3xl flex flex-col gap-3">Help & Support</h4>
            <p className="text-gray-500 leading-8">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
