import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Find from "./pages/Find";
import Register from "./pages/Register";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Policy from "./pages/Policy";
import SendEmail from "./pages/password_recovery/SendEmail";
import NewPassword from "./pages/password_recovery/NewPassword";
import EmailConfirm from "./pages/EmailConfirm";
const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/recover" element={<SendEmail />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/email_confirm" element={<EmailConfirm />} />
      </Routes>
    </Router>
  );
};

export default App;
