import React from "react";

const RequestsCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className="request-card bg-white rounded border border-black space-y-3 py-3 px-6"
    >
      <div className="space-x-2">
        <span>Blood Group:</span>
        <span className=" text-black/60 text-sm capitalize">
          {item.blood_group}
        </span>
      </div>
      <div className="space-x-2">
        <span>Location:</span>
        <span className=" text-black/60 text-sm capitalize">{item.location}</span>
      </div>
      <div className="space-x-2">
        <span>Contact:</span>
        <span className=" text-black/60 text-sm capitalize">{item.contact}</span>
      </div>
      <div className="space-x-2">
        <span>status:</span>
        <span
          className={`text-sm capitalize ${
            item.status === "accepted" ? "text-green-700" : "text-rose-500"
          }`}
        >
          {item.status}
        </span>
      </div>
      <div className="space-x-2">
        <span>Event:</span>
        <span className=" text-black/60 text-sm capitalize">
          {item.event_description}
        </span>
      </div>
    </div>
  );
};

export default RequestsCard;
