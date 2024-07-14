import React from "react";
import img from "../assets/images/sign_up_n6im.png";

const SignUp = () => {
  return (
    <section className="registration">
      <div className="container mx-auto px-4">
        <div class="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="lg:order-last">
              <img src={img} alt="" srcset="" className="w-full h-full" />
            </div>
            <form className="py-5 px-8 space-y-3">
              <div class="py-3">
                <h1 class="text-2xl">Create a new account</h1>
              </div>
              <div className="form-control space-y-3">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="username"
                  class="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                />
              </div>
              <div className="form-control space-y-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  class="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                />
              </div>
              <div className="form-control space-y-3">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                placeholder="Password"
                class="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
              />
              </div>
              
              <div className="form-control space-y-3">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                class="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
              />
              </div>
              <button class="default-btn py-3 w-full rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
