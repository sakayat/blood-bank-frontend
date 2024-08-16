import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { AlignLeft, HamIcon, X } from "lucide-react";

const Navbar = () => {
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const handleLogOut = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/accounts/logout/`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );

    if (res.ok) {
      localStorage.removeItem("authToken");
      return navigate("/login");
    }

    if(window.innerWidth < 1024){
      setOpen(!open)
    }
  };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLink = () => {
    if (window.innerWidth < 1024) {
      setOpen(false);
    }
  };

  return (
    <div className="navbar fixed top-0 inset-x-0 w-full z-40">
      <nav className="bg-white text-black border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-5">
            <div className="logo">
              <NavLink to="/">
                <img src={logo} alt="" className="w-full h-full" />
              </NavLink>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden block px-4 border border-black py-2"
            >
              {open ? (
                <X size={22} className="icon-color" />
              ) : (
                <AlignLeft size={22} className="icon-color" />
              )}
            </button>
            <ul
              className={`lg:flex items-center gap-8 uppercase text-sm ${
                open
                  ? "block lg:hidden absolute top-20 inset-x-0 py-5 space-y-5 bg-black text-white px-8"
                  : "hidden"
              }`}
              id="nav-links"
            >
              <li>
                <NavLink
                  to="blood-request/"
                  className="active"
                  onClick={handleNavLink}
                >
                  Blood Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact/"
                  className="active"
                  onClick={handleNavLink}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="about/" className="active" onClick={handleNavLink}>
                  About Us
                </NavLink>
              </li>
              {token ? (
                <>
                  <li>
                    <NavLink
                      to="profile/"
                      className="active"
                      onClick={handleNavLink}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/ongoing-requests/"
                      className="active"
                      onClick={handleNavLink}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="py-3 px-4 default-btn uppercase text-sm"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <ul className={`${open ? "space-y-5" : "flex gap-5"}`}>
                  <li>
                    <NavLink
                      to="login/"
                      className="active"
                      onClick={handleNavLink}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="sign-up/"
                      className="active"
                      onClick={handleNavLink}
                    >
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
