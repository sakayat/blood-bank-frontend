import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileDetailsForm from "./components/ProfileDetailsForm";
import UpdateProfileForm from "./components/UpdateProfileForm";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="sign-up/" element={<SignUp />} />
        <Route path="login/" element={<Login />} />
        <Route path="profile/" element={<Profile />} />
        <Route path="profile/details/" element={<ProfileDetailsForm />} />
        <Route path="profile/update/:id" element={<UpdateProfileForm />} />
      </Routes>
    </div>
  );
};

export default App;
