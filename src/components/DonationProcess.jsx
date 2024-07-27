import React from "react";
import image1 from "../assets/images/process_1 (2).jpg";
import image2 from "../assets/images/process_2 (2).jpg";
import image3 from "../assets/images/process_3 (3).jpg";

const DonationProcess = () => {
  const processData = [
    {
      id: 1,
      title: "Registration",
      des: "To begin the donation process, you will need to fill out a simple registration form. This form will collect all the necessary contact information required for the donation process",
      process: 1,
      img: image1,
    },
    {
      id: 2,
      title: "Screening",
      des: "A small sample of blood will be taken from your finger for a quick test. This test is designed to ensure that your blood iron levels are sufficient for the donation process",
      process: 2,
      img: image2,
    },
    {
      id: 3,
      title: "Donation",
      des: "Once you have successfully passed the screening test, you will be guided to a donor bed for the blood donation. The donation process itself is brief and typically takes only 6-10 minutes",
      process: 3,
      img: image3,
    },
  ];
  return (
    <section className="pt-10">
      <div className="py-5">
        <h1 className="text-4xl text-center uppercase font-bold text-black/75">
          DONATION PROCESS
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-5">
          {processData.map((item) => (
            <div className="process-card space-y-3" key={item.id}>
              <div className="relative">
                <img src={item.img} alt="" className="w-full h-96 lg:h-64" />
                <div className="donation-overly bg-rose-500 w-24 h-full lg:h-24 opacity-70 absolute bottom-0 right-0">
                  <h4 className="text-3xl font-bold flex items-center justify-center relative text-white h-full lg:h-24">
                    {item.process}
                  </h4>
                </div>
              </div>
              <div className="p-3 space-y-3">
                <h3 className="text-3xl">{item.title}</h3>
                <p className="text-gray-500">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationProcess;
