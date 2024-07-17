import React, { useState } from "react";

const RequestSearchForm = ({ setRequestData }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://127.0.0.1:8000/api/donors/blood-request-list/?search=${
        query ? query : ""
      }`
    );
    const data = await res.json();
    setRequestData(data);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-3">
      <input
        type="search"
        placeholder="Search..."
        className="outline-none py-2.5 px-6 w-full border border-black rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="default-btn py-2.5 px-5 rounded border text-md"
      >
        Search
      </button>
    </form>
  );
};

export default RequestSearchForm;
