import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileDetailsForm from "./components/ProfileDetailsForm";
import UpdateProfileForm from "./components/UpdateProfileForm";
import Dashboard from "./components/Dashboard";
import CreateEvent from "./components/CreateEvent";
import Layout from "./components/Layout";
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
        {/* <Route path="dashboard/">
          <Route index element={<Dashboard />} />
          <Route path="create-event/" element={<CreateEvent />} />
        </Route> */}
        <Route path="dashboard/" element={<Layout />}>
        <Route path="create-event/" element={<CreateEvent />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
