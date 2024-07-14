import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("authToken");
  return (
    <div className="navbar sticky inset-x-0 top-0 z-10">
      <nav className="bg-white text-black border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="logo">
              <NavLink to="/">Blood Bank</NavLink>
            </div>
            <ul className="flex items-center gap-8" id="nav-links">
              {token ? (
                <>
                  <li>
                    <NavLink to="/profile" className="active">
                      Profile
                    </NavLink>
                  </li>
                  
                </>
              ) : (
                <ul className="flex gap-5">
                  <li>
                    <NavLink to="/login" className="active">
                      Login
                    </NavLink>
                    <NavLink to="/sign-up" className="active">
                      SignUp
                    </NavLink>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
