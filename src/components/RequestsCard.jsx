import React from "react";

const RequestsCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className="request-card bg-white rounded border border-black space-y-3 py-3 px-6"
    >
      <div className="space-x-2">
        <span>Blood Group:</span>
        <span className=" text-black/60 text-md capitalize">{item.blood_group}</span>
      </div>     
      
      <div className="space-x-2">
        <span>Event:</span>
        <span className=" text-black/60 text-md capitalize">{item.event_description}</span>
      </div>
      <div className="space-x-2">
        <span>Location:</span>
        <span className=" text-black/60 text-md capitalize">Dhaka</span>
      </div>
      <div className="space-x-2">
        <span>Contact:</span>
        <span className=" text-black/60 text-md capitalize">01757831694</span>
      </div>
      <div className="space-x-2">
        <span>status:</span>
        <span className={`text-md capitalize ${item.status === "accepted" ? "text-green-700": "text-rose-500"}`}>{item.status}</span>
      </div>
    </div>
  );
};

export default RequestsCard;
