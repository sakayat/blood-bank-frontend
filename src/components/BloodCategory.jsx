import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/empty.png";
import RequestsCard from "./RequestsCard";
import RequestSearchForm from "./RequestSearchForm";

const BloodCategory = () => {
  const bloodGroup = [
    { id: 1, type: "A+" },
    { id: 2, type: "A-" },
    { id: 3, type: "B+" },
    { id: 4, type: "B-" },
    { id: 5, type: "AB+" },
    { id: 6, type: "AB-" },
    { id: 7, type: "O+" },
    { id: 8, type: "O-" },
  ];

  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    fetchRequestData();
  }, []);

  const fetchRequestData = async (group) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donors/blood-request-list/?search=${
        group ? group : ""
      }`
    );
    const data = await res.json();
    setRequestData(data);
  };

  const handleBloodTypes = (group) => {
    fetchRequestData(group);
  };

  return (
    <section className="pt-10">
      <div className="py-5">
        <h3 className="text-4xl text-center">Blood Type</h3>
      </div>
      <div className="requests-list">
        <div className="container mx-auto px-4">
          <div className="blood-group py-5 space-y-5">
            <div className="groups flex flex-wrap justify-center lg:justify-between gap-2 w-full rounded py-2">
              {bloodGroup.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleBloodTypes(item.type)}
                  className="py-3 px-4 border-l capitalize font-bold default-btn rounded-full w-12 h-12 flex items-center justify-center text-sm"
                >
                  {item.type}
                </button>
              ))}
            </div>
            <div className="search">
              <RequestSearchForm setRequestData={setRequestData} />
            </div>
            <div className="request-list w-full">
              {requestData.length === 0 && (
                <img src={img} alt="" className="w-full h-full mx-auto" />
              )}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
                {requestData.map((item) => (
                  <RequestsCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodCategory;
