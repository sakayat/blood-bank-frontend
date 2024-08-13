import React, { useState, useRef } from "react";
import headerImg from "../assets/images/section_title.jpg";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await emailjs.sendForm(
      import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
      import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
      }
    );

    if (res.status) {
      setMessage("Message send successfully");
      e.target.reset();
    }
  };

  return (
    <section className="pt-10 mt-10">
      <div className="relative h-64">
        <img src={headerImg} alt="" className="w-full object-cover h-64" />
        <div className="h-64 flex items-center justify-center absolute top-0 w-full z-20">
          <h3 className="text-4xl text-center uppercase font-bold text-white relative">
            Contact US
          </h3>
        </div>
        <div className="bg-black w-full h-full opacity-60 absolute top-0"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="contact-info space-y-7 py-5 px-6 border my-5">
          <div className="flex gap-3">
            <span>
              <HomeIcon />
            </span>
            <span>23/1, Taltala, Sylhet-3100, Bangladesh</span>
          </div>
          <div className="flex gap-3">
            <span>
              <PhoneCall />
            </span>
            <span>+8801759-231892</span>
          </div>
          <div className="flex gap-3">
            <span>
              <MailIcon />
            </span>
            <span>safe.donor@gmail.com</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="contact-form">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <form
              className="py-5  space-y-3 w-full"
              ref={form}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                required
              />
              <input
                type="text"
                name="user_email"
                placeholder="Email"
                className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                required
              />
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                rows={6}
                required
              />
              <button className="default-btn py-3 w-full">Submit</button>
              <p className="text-rose-400 py-3">{message}</p>
            </form>
          </div>
          <div className="location">
            <h2 className="text-2xl font-semibold">Location</h2>
            <div className="py-5 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.196948395475!2d91.86309617502097!3d24.891262844025054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751abe61a59105d%3A0x75be7d94ceb0fbc3!2s23%2C%201%20Taltola%20Rd%2C%20Sylhet%203100!5e0!3m2!1sen!2sbd!4v1723474616941!5m2!1sen!2sbd"
                width="600"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
