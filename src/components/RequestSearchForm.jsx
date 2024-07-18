import React, { useState } from "react";

const RequestSearchForm = ({ setRequestData }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donors/blood-request-list/?search=${
        query ? query : ""
      }`
    );
    const data = await res.json();
    setRequestData(data);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <div className="form-control space-y-3 w-full">
        <input
          type="search"
          placeholder="Search..."
          className="w-full outline-none py-3 px-4 bg-white border border-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button className="default-btn py-3 px-6 border border-black">Submit</button>
    </form>
  );
};

export default RequestSearchForm;
