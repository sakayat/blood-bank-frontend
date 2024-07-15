import React, { useEffect, useState } from "react";
const DonationHistory = () => {
  const token = localStorage.getItem("authToken");
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const res = await fetch(
      "http://127.0.0.1:8000/api/donors/donation-history/",
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
                recipient
              </th>
              <th scope="col" class="px-6 py-3">
                status
              </th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  {donation.id}
                </th>
                <td class="px-6 py-4">{donation.donor}</td>
                <td class="px-6 py-4">{donation.recipient}</td>
                <td class="px-6 py-4">{donation.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DonationHistory;
