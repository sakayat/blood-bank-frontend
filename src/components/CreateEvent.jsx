import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const [group, setGroup] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [volume, setVolume] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");

  const bloodGroup = [
    { id: 1, value: "a-positive" },
    { id: 2, value: "a-negative" },
    { id: 3, value: "b-positive" },
    { id: 4, value: "b-negative" },
    { id: 5, value: "ab-positive" },
    { id: 6, value: "ab-negative" },
    { id: 7, value: "o-positive" },
    { id: 8, value: "o-negative" },
  ];

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    const userObj = {
      blood_group: group,
      location: location,
      date: date,
      volume: volume,
      event_description: description,
    };

    const res = await fetch(`http://127.0.0.1:8000/api/donors/blood-request/`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(userObj),
    });
    if (res.ok) {
      return navigate("/dashboard/ongoing-requests");
    }
    const data = await res.json();
    setError(data);
  };

  return (
    <section className="event">
      <div className="text-3xl pb-3 border-b w-full">Create Event</div>
      <form className="py-5  space-y-3 w-full" onSubmit={handleSubmitEvent}>
        <div className="form-control space-y-3">
          <label htmlFor="group">Blood Group</label>
          <select
            id="group"
            className="w-full outline-none border border-black/20 py-3 px-4"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          >
            {bloodGroup.map((group) => (
              <option value={group.value} key={group.id}>
                {group.value}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control space-y-3">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-control space-y-3">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            placeholder="Date"
            className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-control space-y-3">
          <label htmlFor="volume">Volume</label>
          <input
            type="number"
            id="volume"
            placeholder="Volume"
            className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
        <div className="form-control space-y-3">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            placeholder="Description"
            className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
          />
        </div>
        {error && (
          <p className="py-3 text-rose-500">
            {(error && error.blood_group) ||
              error.location ||
              error.date ||
              error.volume ||
              error.event_description}
          </p>
        )}
        <button className="default-btn py-3 w-full rounded">Submit</button>
      </form>
    </section>
  );
};

export default CreateEvent;
