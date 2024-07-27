import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/images//add_information.png";

const ProfileDetailsForm = ({ user, id }) => {
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
    { id: 8, value: "O+" },
  ];

  const genders = [
    { id: 1, value: "Male" },
    { id: 2, value: "Female" },
  ];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [group, setGroup] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [age, setAge] = useState(18);
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");
  const [lastDonation, setLastDonation] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setGroup(user.blood_group);
      setGender(user.gender);
      setReligion(user.religion);
      setAge(user.age);
      setProfession(user.profession);
      setAddress(user.address);
      setLastDonation(user.last_donation);
      setIsAvailable(user.is_available);
    }
  }, [user]);

  const handleOnProfile = async (e) => {
    e.preventDefault();
    const userObj = {
      first_name: firstName,
      last_name: lastName,
      blood_group: group,
      gender: gender,
      religion: religion,
      address: address,
      age: age,
      profession: profession,
      last_donation: lastDonation,
      is_available: isAvailable,
    };

    console.log(userObj);
    if (user) {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/donors/update-profile/${id}/`,
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
        return navigate("/profile/");
      }
    } else {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/donors/profile/`,
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(userObj),
        }
      );

      const data = await res.json();

      setError(data);

      if (res.ok) {
        return navigate("/profile/");
      }
    }
  };

  return (
    <section className="pt-10">
      <div className="container mx-auto">
        <div className="py-5">
          <h2 className="text-2xl font-semibold text-center">
            {user ? "Update Profile" : " Add Profile Details"}
          </h2>
        </div>
        <div className="grid grid-cols1 lg:grid-cols-2 place-items-center gap-5">
          <img src={img} alt="" className="w-full h-full" />
          <form
            className="py-5 px-8 space-y-3 w-full"
            onSubmit={handleOnProfile}
          >
            <div className="form-control space-y-3">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                placeholder="First Name"
                className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-control space-y-3">
              <label htmlFor="first_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Last Name"
                className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
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
              <label htmlFor="gender">Select Gender</label>
              <select
                id="gender"
                className="w-full outline-none border border-black/20 py-3 px-4"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Group</option>
                {genders.map((group) => (
                  <option value={group.value} key={group.id}>
                    {group.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control space-y-3">
              <label htmlFor="religion">Religion</label>
              <input
                type="text"
                id="religion"
                placeholder="Religion"
                className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
              />
            </div>
            <div className="form-control space-y-3">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                placeholder="Age"
                className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-control space-y-3">
              <label htmlFor="age">Profession</label>
              <input
                type="text"
                id="profession"
                placeholder="Profession"
                className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </div>
            <div className="form-control space-y-3">
              <label htmlFor="address">Address</label>
              <textarea
                type="text"
                id="address"
                placeholder="Address"
                className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded resize-none"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={2}
              />
            </div>
            <div className="form-control space-y-3">
              <label htmlFor="last_donation">Last Donation</label>
              <input
                type="date"
                id="last_donation"
                placeholder="Last Donation"
                className="w-full outline-none py-3 px-4 border border-black/20 bg-white rounded"
                value={lastDonation}
                onChange={(e) => setLastDonation(e.target.value)}
              />
            </div>
            <div className="form-control flex gap-3">
              <label htmlFor="available">Available</label>
              <input
                type="checkbox"
                id="available"
                placeholder="Available"
                className="outline-none border border-black/20 bg-white rounded"
                checked={isAvailable}
                onChange={() => setIsAvailable(!isAvailable)}
              />
            </div>
            {error && <p className="py-3 text-rose-500">{error.error}</p>}
            <button className="default-btn py-3 w-full rounded">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetailsForm;
