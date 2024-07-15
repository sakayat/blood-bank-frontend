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
    const res = await fetch("https://blood-bank-backend-1sf7.onrender.com/api/donors/list/");
    const data = await res.json();
    setDonorList(data);
  };

  return (
    <section className="pt-10">
      <div className="">
        <div className="max-w-2xl mx-auto flex flex-col items-center py-5">
          <span className="quote-icon">
            <Quote size={45} />
          </span>
          <h2 className="text-4xl font-semi-bold text-center">
            "Donate Your Blood to Us, Save More Life Together"
          </h2>
        </div>
        <div className="donor-list py-8">
          <div className="container mx-auto px-4">
          <div className="text-2xl text-center py-2 border">Donor List</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
              {donorList.map((donor) => (
                <DonorListCard key={donor.id} donor={donor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorList;
