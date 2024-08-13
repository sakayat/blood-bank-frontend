import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/images/login.png";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userObj = {
      username: username,
      password: password,
    };
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/accounts/login/`,
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userObj),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("authToken", data.token);
        return navigate("/");
      }
      setError(data);
    } catch (error) {
      setError("Server is not connected");
    }
  };
  const url = window.location.search.replace("?", "");
  const decodeMsg = decodeURIComponent(url);


  return (
    <section className="login pt-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="py-3">
          <h1 className="text-2xl font-bold text-center">Login</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
          <div className="lg:order-last">
            <img src={img} alt="" className="w-full h-full" />
          </div>
          <form className="py-5 px-8 space-y-3 w-full" onSubmit={handleSubmit}>
            <div className="py-3">
              {url && <p className="pt-3 text-rose-500">{decodeMsg}</p>}
            </div>
            <div className="form-control space-y-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="username"
                className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-control space-y-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="default-btn py-3 w-full">Submit</button>
            {error && (
              <p className="py-3 text-rose-500">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
