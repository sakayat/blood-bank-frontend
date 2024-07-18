import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OwnRequests = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const [requests, setRequests] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donors/blood-request/`,
      {
        method: "get",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    const data = await res.json();
    setRequests(data);
  };

//   const handleUpdateRequest = async (id) => {};

//   const handleDeleteRequest = (async = (id) => []);

  return (
    <div className="relative overflow-x-auto">
      <div className="text-3xl pb-3 border-b w-full">Own Requests</div>
      <table className="w-full text-sm text-left text-gray-600 ">
        <thead className="text-xs text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Donor
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Event
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr className="bg-white border-b" key={request.id}>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                {request.id}
              </th>
              <td className="px-6 py-4">{request.donor}</td>
              <td className="px-6 py-4">{request.location}</td>
              <td className="px-6 py-4">{request.date}</td>
              <td className="px-6 py-4">{request.event_description}</td>
              <td
                className={`px-6 py-4 ${
                  request.status === "pending"
                    ? "text-yellow-400"
                    : "text-green-600"
                }`}
              >
                {request.status}
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap- gap-3">
                  <button
                    className="text-blue-400"
                    onClick={() => handleUpdateRequest(request.id)}
                  >
                    Update
                  </button>
                  <button
                    className="text-blue-400"
                    onClick={() => handleDeleteRequest(request.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="py-3 text-rose-500">{error}</p>}
    </div>
  );
};

export default OwnRequests;
