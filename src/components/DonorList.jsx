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
        <h3 className="text-4xl text-center uppercase font-bold text-black/75">Some of Donors</h3>
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
        </div>
      </div>
    </section>
  );
};

export default DonorList;
