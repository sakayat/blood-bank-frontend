import React from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="pt-10 relative">
      <div className="flex h-44 items-center footer border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-3">
            <NavLink to="/">
              <img src={logo} alt="" className="w-72 h-full" />
            </NavLink>
            <p>
              We are world largest and trustful blood donation center. We are
              working all over the world, organizing blood donation campaign to
              grow awareness among the people to donate blood.
            </p>
          </div>
        </div>
      </div>
      <p className="bg-black text-white text-center py-3">
        © {new Date().getFullYear()} Safe Blood. All rights reserved
      </p>
    </section>
  );
};

export default Footer;
