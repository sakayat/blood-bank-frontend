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
import OngoingRequests from "./components/OngoingRequests";
import DonationHistory from "./components/DonationHistory";
import Footer from "./components/Footer";
const App = () => {
  const token = localStorage.getItem("authToken")
  return (
    <div className="App flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="sign-up/" element={<SignUp />} />
          <Route path="login/" element={<Login />} />
          <Route path="profile/" element={<Profile />} />
          <Route path="profile/details/" element={<ProfileDetailsForm />} />
          <Route path="profile/update/:id" element={<UpdateProfileForm />} />
          <Route path="dashboard/" element={<Layout />}>
            <Route path="create-event/" element={<CreateEvent />} />
            <Route path="ongoing-requests/" element={<OngoingRequests />} />
            <Route path="donation-history/" element={<DonationHistory />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
