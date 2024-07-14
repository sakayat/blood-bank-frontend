import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from './components/Login';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="sign-up/" element={<SignUp />} />
        <Route path="login/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
