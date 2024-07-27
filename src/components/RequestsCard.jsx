import React from "react";

const RequestsCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className="request-card bg-white border space-y-3 py-3 px-6"
    >
      <div className="space-x-2">
        <span className="">Blood Group:</span>
        <span className="text-rose-600 text-sm capitalize font-semibold">
          {item.blood_group}
        </span>
      </div>
      <div className="space-x-2">
        <span>Total:</span>
        <span className="text-sm capitalize font-semibold">
          {item.units} {`${item.units > 9 ? "units" : "unit"}`}
        </span>
      </div>
      <div className="space-x-2">
        <span>Location:</span>
        <span className="text-sm capitalize font-semibold">
          {item.location}
        </span>
      </div>
      <div className="space-x-2">
        <span>Contact:</span>
        <span className="text-sm capitalize font-semibold">
          {item.contact}
        </span>
      </div>
      <div className="space-x-2">
        <span>status:</span>
        <span
          className={`text-sm capitalize font-semibold ${
            item.status === "accepted" ? "text-green-700" : "text-rose-600"
          }`}
        >
          {item.status}
        </span>
      </div>
      <div className="space-x-2">
        <span>Event:</span>
        <span className="text-sm capitalize font-semibold">
          {item.event_description}
        </span>
      </div>
    </div>
  );
};

export default RequestsCard;
