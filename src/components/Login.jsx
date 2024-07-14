import React, { useState } from "react";
import img from "../assets/images/sign_up_n6im.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userObj = {
      username: username,
      password: password,
    };
    console.log(userObj);
  };

  return (
    <section className="login">
      <div className="container mx-auto px-4">
        <div className="h-[calc(100vh-6rem)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
            <div className="lg:order-last">
              <img src={img} alt="" className="w-full h-full" />
            </div>
            <form className="py-5 px-8 space-y-3 w-full" onSubmit={handleSubmit}>
              <div className="py-3">
                <h1 className="text-2xl font-bold">Login</h1>
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

              <button className="default-btn py-3 w-full rounded">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
