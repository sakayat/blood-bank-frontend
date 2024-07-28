import React, { useEffect, useState } from "react";
const DonationHistory = () => {
  const token = localStorage.getItem("authToken");
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donors/donation-history/`,
      {
        method: "get",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    const data = await res.json();

    setDonations(data);
  };

  return (
    <section className="history">
      <div className="text-3xl pb-3 border-b w-full">Donation History</div>
      <div className="relative overflow-x-auto">
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
                recipient
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr className="bg-white border-b" key={donation.id}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {donation.id}
                </th>
                <td className="px-6 py-4">{donation.donor}</td>
                <td className="px-6 py-4">{donation.recipient}</td>
                <td
                  className={`px-6 py-4 font-bold capitalize ${
                    donation.status === "accepted"
                      ? "text-green-500"
                      : "text-rose-500"
                  }`}
                >
                  {donation.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DonationHistory;
