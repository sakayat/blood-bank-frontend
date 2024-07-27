import React from "react";
import headerImg from "../assets/images/section_title.jpg";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="pt-10 mt-10">
      <div className="relative h-64">
        <img src={headerImg} alt="" className="w-full object-cover h-64" />
        <div className="h-64 flex items-center justify-center absolute top-0 w-full z-20">
          <h3 className="text-4xl text-center uppercase font-bold text-white relative">
            Contact US
          </h3>
        </div>
        <div className="bg-black w-full h-full opacity-60 absolute top-0"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="contact-info space-y-7 py-5 px-6 border my-5">
          <div className="flex gap-3">
            <span>
              <HomeIcon />
            </span>
            <span>23/1, Taltala, Sylhet-3100, Bangladesh</span>
          </div>
          <div className="flex gap-3">
            <span>
              <PhoneCall />
            </span>
            <span>+8801759-231892</span>
          </div>
          <div className="flex gap-3">
            <span>
              <MailIcon />
            </span>
            <span>safe.donor@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
