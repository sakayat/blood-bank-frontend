import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/images/signup-2.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userObj = {
      username: username,
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };

    const res = await fetch("http://127.0.0.1:8000/api/accounts/register/", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userObj),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("authToken", data.token);
      navigate("/login");
    }
    setError(data);
  };

  return (
    <section className="registration">
      <div className="container mx-auto px-4">
        <div className="lg:h-[calc(100vh-6rem)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
            <div className="">
              <img src={img} alt="" className="w-full h-full" />
            </div>
            <form
              className="py-5 px-8 space-y-3 w-full"
              onSubmit={handleSubmit}
            >
              <div className="py-3">
                <h1 className="text-2xl">Create a new account</h1>
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
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

              <div className="form-control space-y-3">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button className="default-btn py-3 w-full rounded">
                Submit
              </button>
              {error && (
                <p className="py-3 text-rose-500">
                  {error.error ? error.error : error.username}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
