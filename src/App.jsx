import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileDetailsForm from "./components/ProfileDetailsForm";
import UpdateProfileForm from "./components/UpdateProfileForm";
import DashboardLayout from "./components/DashboardLayout";
import OngoingRequests from "./components/OngoingRequests";
import DonationHistory from "./components/DonationHistory";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute ";
import RequestBloodForm from "./components/RequestBloodForm";
import OwnRequests from "./components/OwnRequests";
import UpdateOwnRequestForm from "./components/UpdateOwnRequestForm";
import ViewBloodRequests from "./components/ViewBloodRequests";
import DonorDetails from "./components/DonorDetails";
const App = () => {
  return (
    <div className="App flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="sign-up/" element={<SignUp />} />
          <Route path="login/" element={<Login />} />
          <Route
            path="profile/"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile/details/"
            element={
              <ProtectedRoute>
                <ProfileDetailsForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile/update/:id"
            element={
              <ProtectedRoute>
                <UpdateProfileForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="create-request/" element={<RequestBloodForm />} />
            <Route path="own-requests/" element={<OwnRequests />} />
            <Route path="ongoing-requests/" element={<OngoingRequests />} />
            <Route path="donation-history/" element={<DonationHistory />} />
            <Route path="update-request/:id" element={<UpdateOwnRequestForm />} />
          </Route>
          <Route path="blood-request/" element={<ViewBloodRequests />} />
          <Route path="donor/:id/" element={<DonorDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
