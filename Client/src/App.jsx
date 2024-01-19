import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import {
  Register,
  Login,
  Error,
  Landing,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
} from './pages'
import DashboardLayout from './pages/DashboardLayout'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children:[{
         index:true,
         element:<AddJob />
        },
      {
        path: 'stats',
        element:<Stats />
      },
      {
        path:'all-jobs',
        element: <AllJobs />
      },
      {
        path:'profile',
        element:<Profile />
      },
      {
        path:'admin',
        element:<Admin />
      }
      ]
      },
    ],
  },
]);

function App() {

  return (
    <>
     <RouterProvider router ={router}></RouterProvider>
    </>
  )
}



export default App
