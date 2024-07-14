import React from "react";

const RequestsCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className="request-card bg-white shadow-xl rounded space-y-3 py-3 px-6"
    >
      <div className="space-x-2">
        <span className="font-semibold">Blood Group:</span>
        <span className=" text-black/60 text-md">{item.blood_group}</span>
      </div>
      <div className="space-x-2">
        <span className="font-semibold">volume:</span>
        <span className=" text-black/60 text-md">{item.volume}</span>
      </div>
      <div className="space-x-2">
        <span className="font-semibold">Event:</span>
        <span className=" text-black/60 text-md">{item.event_description}</span>
      </div>
      <div className="space-x-2">
        <span className="font-semibold">status:</span>
        <span className=" text-black/60 text-md">{item.status}</span>
      </div>
      <div className="space-x-2">
        <span className="font-semibold">Date:</span>
        <span className=" text-black/60 text-md">{item.date}</span>
      </div>
    </div>
  );
};

export default RequestsCard;
