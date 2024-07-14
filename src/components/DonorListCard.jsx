import React from "react";
import { Link } from "react-router-dom";

const DonorListCard = ({ donor }) => {
  return (
    <div className="list-card space-y-3 bg-white text-black shadow-2xl py-3 px-6 rounded">
      <div className="space-x-2">
        <span className="font-semibold">Name:</span>
        <span className=" text-black/60 text-md">
          {donor.first_name} {donor.last_name}
        </span>
      </div>
      <div className="space-x-2">
        <span className="font-semibold">Age:</span>
        <span className=" text-black/60 text-md">{donor.age}</span>
      </div>
      <div className="space-x-2">
        <span className="font-semibold">Address:</span>
        <span className="text-black/60 text-md">{donor.address}</span>
      </div>
      <div className="space-x-2">
        <span className="font-semibold">Last Donation:</span>
        <span className=" text-black/60 text-md">{donor.last_donation}</span>
      </div>
      <Link
        to="/"
        className="default-btn hover:text-white py-3 text-center rounded block"
      >
        Request
      </Link>
    </div>
  );
};

export default DonorListCard;
