import React, { useEffect, useState } from "react";
import headerImg from "../assets/images/section_title.jpg";
import profileImg from "../assets/images/profile_pic.png";
import { useParams } from "react-router-dom";

const DonorDetails = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    profileDetails();
  }, []);

  const profileDetails = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donors/details/${id}/`
    );
    const data = await res.json();
    setUserData(data);
  };

  return (
    <section className="pt-10 mt-10">
      <div className="relative h-64">
        <img src={headerImg} alt="" className="w-full object-cover h-64" />
        <div className="h-64 flex items-center justify-center absolute top-0 w-full z-20">
          <h3 className="text-4xl text-center uppercase font-bold text-white relative">
            Donor Details
          </h3>
        </div>
        <div className="bg-black w-full h-full opacity-60 absolute top-0"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-24 bg-black/90 text-white px-6 mt-10">
          <div className="flex justify-center">
            <img
              src={userData?.profile_image ? `${import.meta.env.VITE_API_BASE_URL}/${
                userData?.profile_image
              }` : profileImg}
              alt=""
              className="w-36 h-36 rounded-full p-1"
            />
          </div>
          <div className="w-[48rem] mx-auto">
            <div className="flex justify-between w-full">
              <div className="space-x-3">
                <span>Blood Group:</span>
                <span className="w-5 h-5 bg-rose-600 rounded-full p-2">
                  {userData?.blood_group}
                </span>
              </div>
              <div className="space-x-3">
                <span>Last Donation:</span>
                <span>{userData?.last_donation}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 py-5">
          <div className="w-full py-3 px-6 border">
            <ul className="donor-info space-y-7">
              <li className="flex">
                <span className="w-44 font-semibold caption">Name</span>
                <div className="space-x-3">
                  <span>{userData?.first_name}</span>
                  <span>{userData?.last_name}</span>
                </div>
              </li>
              <li className="flex">
                <span className="w-44 font-semibold caption">Gender</span>
                <span>{userData?.gender}</span>
              </li>
              <li className="flex">
                <span className="w-44 font-semibold caption">Religion</span>
                <span>{userData?.religion}</span>
              </li>
              <li className="flex">
                <span className="w-44 font-semibold caption">Email</span>
                <span>{userData?.email}</span>
              </li>
              <li className="flex">
                <span className="w-44 font-semibold caption">Profession</span>
                <span>{userData?.profession}</span>
              </li>
              <li className="flex">
                <span className="w-44 font-semibold caption">Address</span>
                <span>{userData?.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorDetails;
