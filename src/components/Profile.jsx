import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const token = localStorage.getItem("authToken");

  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donors/profile/`,
      {
        method: "get",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    const data = await res.json();
    
    setProfileInfo(data);
  };

  return (
    <section className="py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="py-5">
          <h2 className="text-4xl font-semibold text-center">
            Donor Profile Info
          </h2>
        </div>
        <div className="profile-info space-y-5">
          <p className="text-rose-500">{profileInfo.error}</p>
          {profileInfo.error ? (
            <button className="default-btn py-3 px-6 rounded">
              <Link to="details/" className="hover:text-white">
                Add Profile Details
              </Link>
            </button>
          ) : (
            <div className="profile-card border py-5 px-8 space-y-5">
              <div className="flex justify-center">
                <img
                  src={profileInfo.profile_image}
                  alt=""
                  className="w-36 h-36 rounded-full border-2 border-[#fe3c47] p-1"
                />
              </div>
              <div className="space-x-2">
                <span className="font-semibold">Name:</span>
                <span className="text-black/60 text-md space-x-2">
                  <span>{profileInfo.first_name}</span>
                  <span>{profileInfo.last_name}</span>
                </span>
              </div>
              <div className="space-x-2">
                <span className="font-semibold">Blood Group:</span>
                <span className=" text-black/60 text-md">
                  {profileInfo.blood_group}
                </span>
              </div>
              <div className="space-x-2">
                <span className="font-semibold">Gender:</span>
                <span className=" text-black/60 text-md">
                  {profileInfo.gender}
                </span>
              </div>
              <div className="space-x-2">
                <span className="font-semibold">Religion:</span>
                <span className=" text-black/60 text-md">
                  {profileInfo.religion}
                </span>
              </div>
              <div className="space-x-2">
                <span className="font-semibold">Age:</span>
                <span className=" text-black/60 text-md">
                  {profileInfo.age}
                </span>
              </div>
              <div className="space-x-2">
                <span className="font-semibold">Profession:</span>
                <span className=" text-black/60 text-md">
                  {profileInfo.profession}
                </span>
              </div>
              <div className="space-x-2">
                <span className="font-semibold">Address:</span>
                <span className=" text-black/60 text-md">
                  {profileInfo.address}
                </span>
              </div>
              <div className="space-x-2">
                <span className="font-semibold">Last Donation:</span>
                <span className=" text-black/60 text-md">
                  {profileInfo.last_donation}
                </span>
              </div>
              {profileInfo && (
                <button className="default-btn w-full py-3 px-6  hover:text-white">
                  <Link
                    to={`update/${profileInfo.id}/`}
                    className="hover:text-white"
                  >
                    Update Profile
                  </Link>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
