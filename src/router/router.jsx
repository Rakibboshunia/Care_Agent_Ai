import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Home />,
      },
      {
        path: "/medicines",
        element: <Home />,
      },
      {
        path: "/doctors",
        element: <Home />,
      },
      {
        path: "/pharmacies",
        element: <Home />,
      },
      {
        path: "/refill-requests",
        element: <Home />,
      },
      {
        path: "/settings",
        element: <Home />,
      }
    ],
  },
]);

export default router;