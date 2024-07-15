import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OngoingRequests = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("authToken");
  const [requests, setRequests] = useState([]);

  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const res = await fetch(
      "http://127.0.0.1:8000/api/donors/ongoing-requests/",
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

  const handleAcceptRequest = async (id) => {
    const res = await fetch(
      `http://127.0.0.1:8000/api/donors/accept-request/${id}/`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    
    const data = await res.json()

    if(res.ok){
      return navigate("/dashboard/donation-history/")
    }
    setError(data)
    
  };

  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-600 ">
          <thead class="text-xs text-gray-700 bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Donor
              </th>
              <th scope="col" class="px-6 py-3">
                Location
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Event
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr class="bg-white border-b" key={request.id}>
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  {request.id}
                </th>
                <td class="px-6 py-4">{request.donor}</td>
                <td class="px-6 py-4">{request.location}</td>
                <td class="px-6 py-4">{request.date}</td>
                <td class="px-6 py-4">{request.event_description}</td>
                <td class="px-6 py-4">{request.status}</td>
                <td class="px-6 py-4">
                  {request.status === "pending" ? (
                    <div className="flex flex-wrap- gap-3">
                      <button
                        className="text-blue-400"
                        onClick={() => handleAcceptRequest(request.id)}
                      >
                        Accept
                      </button>
                      <button className="text-rose-400">Cancel</button>
                    </div>
                  ) : (
                    <button className="text-rose-400">Cancel</button>
                  )}
                </td>
              </tr>
            ))}
            {error && <p className="py-3 text-rose-500">{error}</p>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OngoingRequests;
