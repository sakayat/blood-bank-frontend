import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Calendar, Clock, LocateFixed } from "lucide-react";
import { Link } from "react-router-dom";

import img from "../assets/images/event_1.jpg";

const DonationCampaign = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <section className="campaigns pt-10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-5 py-5">
            <h3 className="text-4xl uppercase font-bold text-black/75">
              Donation Campaigns
            </h3>
            <p className="py-5 text-gray-500 leading-7">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <button className="default-btn py-3 px-6">
              <Link to="campaigns/" className="hover:text-white">Load All Campaigns</Link>
            </button>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="slider-container py-5">
              <Slider {...settings}>
                <div className="event-info">
                  <div className="flex items-center gap-5">
                    <div className="event-image">
                      <img src={img} alt="" className="w-full h-full" />
                    </div>
                    <div className="content space-y-5">
                      <div className="flex items-center gap-3">
                        <span className="icon-color">
                          <Calendar size={20} />
                        </span>
                        <span className="text-sm">December 7</span>
                      </div>
                      <h4 className="text-4xl">
                        World Blood Donors Day
                      </h4>
                      <p className="text-gray-500 leading-7">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
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
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCampaign;
