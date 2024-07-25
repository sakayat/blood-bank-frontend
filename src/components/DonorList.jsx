import React, { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";
import DonorListCard from "./DonorListCard";

const DonorList = () => {
  const [donorList, setDonorList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donors/list/`
    );
    const data = await res.json();
    setDonorList(data);
  };

  return (
    <section className="pt-10">
      <div className="py-5">
        <h3 className="text-6xl text-center">Donors</h3>
      </div>
      <div className="donor-list">
        <div className="max-w-7xl mx-auto px-4">
          {donorList.length === 0 && (
            <p className="text-center text-3xl">Donor Not Found</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            {donorList.slice(0, 6).map((donor) => (
              <DonorListCard key={donor.id} donor={donor} />
            ))}
          </div>
          <div className="flex justify-center">
            {donorList.length > 6 && (
              <button className="default-btn py-3 px-6 w-full">
                View all requests
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorList;
