import React from "react";
import headerImg from "../assets/images/section_title.jpg";
import { Calendar, Clock, Link, LocateFixed } from "lucide-react";
import img from "../assets/images/c1.jpg";

const Campaigns = () => {
  return (
    <section className="pt-10 mt-10">
      <div className="relative h-64">
        <img src={headerImg} alt="" className="w-full object-cover h-64" />
        <div className="h-64 flex items-center justify-center absolute top-0 w-full z-20">
          <h3 className="text-4xl text-center uppercase font-bold text-white relative">
            All Campaigns
          </h3>
        </div>
        <div className="bg-black w-full h-full opacity-60 absolute top-0"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-5">
          <div className="event-info">
            <div className="flex flex-col gap-5">
              <div className="event-image w-full">
                <img src={img} alt="" className="w-full h-64" />
              </div>
              <div className="content space-y-3 px-4">
                <div className="flex items-center gap-3">
                  <span className="icon-color">
                    <Calendar size={20} />
                  </span>
                  <span className="text-sm">December 7</span>
                </div>
                <h4 className="text-3xl">World Blood Donors Day</h4>
                <p className="text-gray-500 leading-7">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <div className="event-time flex items-center gap-5">
                  <div className="flex items-center gap-3">
                    <span className="icon-color">
                      <Clock size={20} />
                    </span>
                    <span className="text-sm">1:00 pm - 3:00 pm</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="icon-color">
                      <LocateFixed size={20} />
                    </span>
                    <span className="text-sm">Rajshahi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
