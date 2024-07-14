import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/empty.png"
import RequestsCard from "./RequestsCard";
const BloodCategory = () => {
  const bloodGroup = [
    { id: 1, type: "a-positive" },
    { id: 2, type: "a-negative" },
    { id: 3, type: "b-positive" },
    { id: 4, type: "b-negative" },
    { id: 5, type: "ab-positive" },
    { id: 6, type: "ab-negative" },
    { id: 7, type: "o-positive" },
    { id: 8, type: "o-negative" },
  ];

  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    fetchRequestData();
  }, []);

  const fetchRequestData = async (group) => {
    const res = await fetch(
      `http://127.0.0.1:8000/api/donors/blood-request-list/?blood_group=${
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
        <div className="container mx-auto">
          <div className="blood-group flex flex-col lg:flex-row items-start gap-8 py-5">
            <div className="groups flex flex-col bg-black w-full lg:w-44 rounded">
              {bloodGroup.map((group) => (
                <Link
                  className="text-white py-3 px-4 border-b capitalize"
                  key={group.id}
                  onClick={() => handleBloodTypes(group.type)}
                  to={`?/blood_group/${group.type}`}
                >
                  {group.type}
                </Link>
              ))}
            </div>
            <div className="request-list w-full">
            {requestData.length === 0 && <img src={img} alt="" className="w-full h-full mx-auto"/>}
              <div className="flex flex-wrap gap-5 w-full">
                {requestData.map((item) => (
                  <RequestsCard key={item.id} item={item}/>
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
