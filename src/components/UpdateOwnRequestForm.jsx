import React, { useEffect, useState } from "react";
import RequestBloodForm from "./RequestBloodForm";
import { useParams } from "react-router-dom";

const UpdateOwnRequestForm = () => {
  const token = localStorage.getItem("authToken");
  const [bloodRequest, setBloodRequest] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donors/blood-request/${id}/`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    const data = await res.json();
    setBloodRequest(data);
  };
  return (
    <>
      <RequestBloodForm bloodRequest={bloodRequest} id={id} />
    </>
  );
};

export default UpdateOwnRequestForm;
