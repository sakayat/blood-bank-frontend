import React from "react";
import { Link } from "react-router-dom";

const DonorListCard = ({ donor }) => {
  return (
    <div className="list-card flex flex-col justify-between bg-white text-black shadow-2xl border">
      <div className="py-3 px-6 space-y-3">
        <div className="space-x-2">
          <span>Name:</span>
          <span className="font-semibold text-sm">
            {donor.first_name} {donor.last_name}
          </span>
        </div>
        <div className="space-x-2">
          <span>Age:</span>
          <span className="font-semibold text-sm">{donor.age}</span>
        </div>
        <div className="space-x-2">
          <span>Address:</span>
          <span className="font-semibold text-sm">{donor.address}</span>
        </div>
        <div className="space-x-2">
          <span>Last Donation:</span>
          <span className="font-semibold text-sm">{donor.last_donation}</span>
        </div>
      </div>
      <Link
        to={`donor/${donor.id}/`}
        className="default-btn hover:text-white py-3 text-center block"
      >
        Details
      </Link>
    </div>
  );
};

export default DonorListCard;
