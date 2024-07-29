import React, { useEffect, useState } from "react";
import img from "../assets/images/empty.png";
import headerImg from "../assets/images/section_title.jpg";
import RequestsCard from "./RequestsCard";
import RequestSearchForm from "./RequestSearchForm";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

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

  const [pagination, setPagination] = useState({});

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchRequestData();
  }, [currentPage]);

  const fetchRequestData = async () => {
    const res = await fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }/api/donors/blood-request-list/?page=${currentPage}`
    );
    const data = await res.json();
    setRequestData(data.results);
    setPagination({
      count: data.count,
      next: data.next,
      prev: data.previous,
    });
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
    <section className="pt-10 mt-10">
      <div className="relative h-64">
        <img src={headerImg} alt="" className="w-full object-cover h-64" />
        <div className="h-64 flex items-center justify-center absolute top-0 w-full z-20">
          <h3 className="text-4xl text-center uppercase font-bold text-white relative">
            All Blood Request
          </h3>
        </div>
        <div className="bg-black w-full h-full opacity-60 absolute top-0"></div>
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
    </section>
  );
};

export default ViewBloodRequests;
