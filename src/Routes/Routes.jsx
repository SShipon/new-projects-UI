import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../components/Dashboard/Dashboard";
// import Overview from "../components/Overview/Overview";
import Home from "../components/Overview/Overview";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          Component: Home
        },
        
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>,
          children: [
            {
              path:'overview',
              Component: Home
            },
          ]
        },
      ],
    },
  ]);