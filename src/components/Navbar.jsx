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
    const data = await res.json();

    console.log(data);
    console.log(res);
  };

  return (
    <div className="navbar sticky inset-x-0 top-0 z-10">
      <nav className="bg-white text-black border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="logo">
              <NavLink to="/">Humane Donor</NavLink>
            </div>
            <ul className="flex items-center gap-8" id="nav-links">
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
