import React, { useEffect, useState } from "react";
import img from "../assets/images/empty.png";
import RequestsCard from "./RequestsCard";
import RequestSearchForm from "./RequestSearchForm";

const ViewBloodRequests = () => {
  const bloodGroup = [
    { id: 1, group: "A+", value: "A%2B" },
    { id: 2, group: "A-", value: "A-" },
    { id: 3, group: "B+", value: "B%2B" },
    { id: 4, group: "B-", value: "B-" },
    { id: 5, group: "AB+", value: "AB%2B" },
    { id: 6, group: "AB-", value: "AB-" },
    { id: 7, group: "O+", value: "O%2B" },
    { id: 8, group: "O-", value: "O-" },
  ];

  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    fetchRequestData();
  }, []);

  const fetchRequestData = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donors/blood-request-list/`
    );
    const data = await res.json();
    setRequestData(data);
  };

  const handleBloodTypes = async (group) => {
    const res = await fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }/api/donors/bloods/?blood_group=${group}`
    );
    const data = await res.json();
    setRequestData(data);
  };

  return (
    <section className="pt-10 mt-20">
      <div className="py-5">
        <h3 className="text-6xl text-center">All Blood Request</h3>
      </div>
      <div className="requests-list">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="blood-group py-5 space-y-5">
            <div className="groups flex flex-wrap justify-center lg:justify-between gap-8 w-full py-2">
              {bloodGroup.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleBloodTypes(item.value)}
                  className="py-3 px-4 border-l capitalize font-bold default-btn rounded-full w-12 h-12 flex items-center justify-center text-sm"
                >
                  {item.group}
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

export default ViewBloodRequests;
