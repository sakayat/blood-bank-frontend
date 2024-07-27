import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
  };

  return (
    <div className="navbar fixed top-0 inset-x-0 w-full z-10">
      <nav className="bg-white text-black border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="logo">
              <NavLink to="/">Safe Blood</NavLink>
            </div>
            <ul className="flex items-center gap-8" id="nav-links">
              <li>
                <NavLink to="blood-request/" className="active">
                  Blood Request
                </NavLink>
              </li>
              <li>
                <NavLink to="contact/" className="active">
                  Contact
                </NavLink>
              </li>
              {token ? (
                <>
                  <li>
                    <NavLink to="profile/" className="active">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/ongoing-requests/"
                      className="active"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="py-3 px-4 default-btn rounded"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <ul className="flex gap-5">
                  <li>
                    <NavLink to="login/" className="active">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="sign-up/" className="active">
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
