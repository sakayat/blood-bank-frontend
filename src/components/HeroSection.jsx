import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/images/slider1.jpg";
import img2 from "../assets/images/slider2.jpg";
import img3 from "../assets/images/slider3.jpg";

const HeroSection = () => {
  const sliderData = [
    {
      id: 1,
      title: "Donate Your Blood to Us, Save More Life Together",
      description: "YOUR BLOOD CAN BRING SMILE IN OTHER PERSON FACE",
      image: img1,
    },
    {
      id: 2,
      title: "Donate blood,save life !",
      description: "DONATE BLOOD AND INSPIRES OTHERS",
      image: img2,
    },
    {
      id: 3,
      title: "Donate blood,save life !",
      description: "YOUR BLOOD CAN BRING SMILE IN OTHER PERSON FACE",
      image: img3,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <section className="hero">
      <div className="slider-container overflow-hidden">
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div
              className="content text-white space-y-5 relative "
              key={item.id}
            >
              <div className="slider-img">
                <div className="overlay absolute w-full h-full"></div>
                <img src={item.image} alt="" className="w-full h-[54rem]" />
                <div className="max-w-7xl mx-auto px-4">
                  <div className="absolute top-0 h-[54rem] flex flex-col gap-8 items-center text-center lg:text-start lg:items-start justify-center">
                    <h1 className="text-2xl">{item.title}</h1>
                    <p className="text-4xl lg:text-6xl w-full lg:w-1/2 lg:leading-[5rem] lg:font-bold">
                      {item.description}
                    </p>
                    <button className="default-btn py-3 px-6">
                      Donate Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
