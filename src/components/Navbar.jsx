import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar sticky inset-x-0 top-0 z-10">
      <nav className="bg-white text-black border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="logo">
              <NavLink to="/">Blood Bank</NavLink>
            </div>
            <ul className="flex items-center gap-8" id="nav-links">
              <li>
                <NavLink href="http://" className="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="login/">Login</NavLink>
              </li>
              <li>
                <NavLink to="sign-up/">SignUp</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
