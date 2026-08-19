import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Jobs from "../pages/jobs/Jobs";
import JobDetails from "../pages/jobs/JobDetails";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard"
import About from "../pages/About";
import MyApplications from "../pages/dashboard/MyApplications";
import Profile from "../pages/profile/Profile";
import EmployerDashboard from "../pages/employer/EmployerDashboard";
import PostJob from "../pages/employer/PostJob";
import ManageJobs from "../pages/employer/ManageJobs";
import Candidates from "../pages/employer/Candidates";
import ApplyJob from "../pages/jobs/ApplyJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "jobs/:id",
        element: <JobDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
  path: "dashboard",
  element: <Dashboard />,
},
{
    path: "about",
    element: <About />
},
{
  path: "applications",
  element: <MyApplications />,
},
{
    path: "profile",
    element: <Profile />,
},
{
  path: "employer/dashboard",
  element: <EmployerDashboard />,
},
{
  path: "employer/post-job",
  element: <PostJob />,
},
{
  path: "employer/jobs",
  element: <ManageJobs />,
},
{
  path: "employer/candidates",
  element: <Candidates />,
},
{
  path: "jobs/:id/apply",
  element: <ApplyJob />,
},
    ],
  },
]);

export default router;