import React from "react";
import { Link } from "react-router-dom";

const DonorListCard = ({ donor }) => {
  return (
    <div className="list-card flex flex-col justify-between bg-white text-black shadow-2xl border border-black">
      <div className="py-3 px-6 space-y-3">
        <div className="space-x-2">
          <span className="font-semibold">Name:</span>
          <span className=" text-black/60 text-sm">
            {donor.first_name} {donor.last_name}
          </span>
        </div>
        <div className="space-x-2">
          <span className="font-semibold">Age:</span>
          <span className=" text-black/60 text-sm">{donor.age}</span>
        </div>
        <div className="space-x-2">
          <span className="font-semibold">Address:</span>
          <span className="text-black/60 text-s">{donor.address}</span>
        </div>
        <div className="space-x-2">
          <span className="font-semibold">Last Donation:</span>
          <span className=" text-black/60 text-sm">{donor.last_donation}</span>
        </div>
      </div>
      <Link
        to="dashboard/create-request/"
        className="default-btn hover:text-white py-3 text-center block"
      >
        Request
      </Link>
    </div>
  );
};

export default DonorListCard;
