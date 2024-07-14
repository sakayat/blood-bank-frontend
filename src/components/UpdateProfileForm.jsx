import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileDetailsForm from "./ProfileDetailsForm";

const UpdateProfileForm = () => {
  const token = localStorage.getItem("authToken");
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const res = await fetch(
      `http://127.0.0.1:8000/api/donors/update-profile/${id}/`,
      {
        method: "get",
        headers: {
          "content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    const data = await res.json();
    setUser(data);
  };

  return (
    <>
      <ProfileDetailsForm user={user} id={id} />
    </>
  );
};

export default UpdateProfileForm;