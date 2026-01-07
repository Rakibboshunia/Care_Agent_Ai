import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";

import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import VerifyOTP from "../pages/Auth/VerifyOTP";
import NewPassword from "../pages/Auth/NewPassword";
import PasswordChanged from "../pages/Auth/PasswordChanged";

import Users from "../pages/Users";
import Medicines from "../pages/Medicines";
import Doctors from "../pages/Doctors";
import Pharmacies from "../pages/Pharmacies";
import RefillRequest from "../pages/RefillRequest";
import { Settings } from "lucide-react";

const router = createBrowserRouter([

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOTP />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/password-changed",
    element: <PasswordChanged />,
  },


  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users",
        element: <Users/>,
      },
      {
        path: "medicines",
        element: <Medicines/>,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "pharmacies",
        element: <Pharmacies />,
      },
      {
        path: "refill-requests",
        element: <RefillRequest />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
