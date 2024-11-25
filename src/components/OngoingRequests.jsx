import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const OngoingRequests = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const [requests, setRequests] = useState([]);

  const [error, setError] = useState(null);

  const [pagination, setPagination] = useState({});

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchRequests();
  }, [currentPage]);

  const fetchRequests = async () => {
    const res = await fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }/api/donors/ongoing-requests/?page=${currentPage}`,
      {
        method: "get",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    const data = await res.json();
    setRequests(data.results);
    setPagination({
      count: data.count,
      next: data.next,
      prev: data.previous,
    });
  };

  const handleAcceptRequest = async (id) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donors/accept-request/${id}/`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );

    const data = await res.json();

    if (res.ok) {
      return navigate("/dashboard/donation-history/");
    }
    setError(data);
  };

  const handleCancelRequest = async (id) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donors/cancel-request/${id}/`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );

    const data = await res.json();

    if (res.ok) {
      return navigate("/dashboard/donation-history/");
    }
    setError(data.error);
  };

  const nextPage = () => {
    if (pagination.next) {
      setCurrentPage((currPage) => currPage + 1);
    }
  };

  const previousPage = () => {
    if (pagination.prev) {
      setCurrentPage((currPage) => currPage - 1);
    }
  };

  const totalPages = Math.ceil(pagination.count / 6);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="relative overflow-x-auto">
      <div className="text-3xl pb-3 border-b w-full">Ongoing Requests</div>
      {requests.length === 0 ? (
        <p className="text-2xl py-5">Loading...</p>
      ) : (
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
                <td className="px-6 py-4">{request.event_description}</td>
                <td
                  className={`px-6 py-4 font-bold capitalize ${
                    request.status === "pending"
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  {request.status}
                </td>
                <td className="px-6 py-4">
                  {request.status === "pending" && (
                    <div className="flex flex-wrap- gap-3">
                      <button
                        className="text-blue-400"
                        onClick={() => handleAcceptRequest(request.id)}
                      >
                        Accept
                      </button>
                    </div>
                  )}
                  {request.status === "accepted" && (
                    <div className="flex flex-wrap- gap-3">
                      <button
                        className="text-blue-400"
                        onClick={() => handleCancelRequest(request.id)}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && <p className="py-3 text-rose-500">{error}</p>}
      <div className="py-5">
        <Pagination
          pagination={pagination}
          previousPage={previousPage}
          nextPage={nextPage}
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default OngoingRequests;
