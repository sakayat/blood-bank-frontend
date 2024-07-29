import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequestBloodForm = ({ bloodRequest, id }) => {
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const bloodGroup = [
    { id: 1, value: "A+" },
    { id: 2, value: "A-" },
    { id: 3, value: "B+" },
    { id: 4, value: "B-" },
    { id: 5, value: "AB+" },
    { id: 6, value: "AB-" },
    { id: 7, value: "O+" },
    { id: 8, value: "O-" },
  ];

  const [group, setGroup] = useState("");
  const [units, setUnits] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    if (bloodRequest) {
      setGroup(bloodRequest.blood_group);
      setUnits(bloodRequest.units);
      setLocation(bloodRequest.location);
      setContact(bloodRequest.contact);
      setDescription(bloodRequest.event_description);
    }
  }, [bloodRequest]);

  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    const userObj = {
      blood_group: group,
      units: units,
      location: location,
      contact: contact,
      event_description: description,
    };

    if (bloodRequest) {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/donors/blood-request/${id}/`,
        {
          method: "put",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(userObj),
        }
      );
      if (res.ok) {
        return navigate("/dashboard/own-requests/");
      }
    } else {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/donors/blood-request/`,
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(userObj),
        }
      );

      if (res.ok) {
        return navigate("/dashboard/own-requests/");
      }
      const data = await res.json();
      setError(data);
      console.log(data);
    }
  };

  return (
    <section className="request-blood">
      <div className="text-3xl pb-3 border-b w-full">
        {bloodRequest ? "Update Request" : "Blood Request"}
      </div>
      <form className="py-5  space-y-3 w-full" onSubmit={handleSubmitRequest}>
        <div className="form-control space-y-3">
          <label htmlFor="group">Blood Group</label>
          <select
            id="group"
            className="w-full outline-none border border-black/20 py-3 px-4"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          >
            <option value="">Select Group</option>
            {bloodGroup.map((group) => (
              <option value={group.value} key={group.id}>
                {group.value}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control space-y-3">
          <label htmlFor="volume">Units</label>
          <input
            type="number"
            id="units"
            placeholder="Units"
            className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
          />
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
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            placeholder="Contact"
            className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
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
              error.contact ||
              error.units ||
              error.event_description}
          </p>
        )}
        <button className="default-btn py-3 w-full rounded">Submit</button>
      </form>
    </section>
  );
};

export default RequestBloodForm;
