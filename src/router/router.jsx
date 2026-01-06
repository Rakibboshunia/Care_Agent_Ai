import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";

import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import VerifyOTP from "../pages/auth/VerifyOTP";
import NewPassword from "../pages/auth/NewPassword";
import PasswordChanged from "../pages/auth/PasswordChanged";

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
        element: <Home />,
      },
      {
        path: "medicines",
        element: <Home />,
      },
      {
        path: "doctors",
        element: <Home />,
      },
      {
        path: "pharmacies",
        element: <Home />,
      },
      {
        path: "refill-requests",
        element: <Home />,
      },
      {
        path: "settings",
        element: <Home />,
      },
    ],
  },
]);

export default router;
