import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AppLayout,
  Error,
  About,
  Register,
  Login,
  Home,
  Products,
  Tools,
  Courses,
  LandListings,
  PostLands,
  PostProducts,
  PostTools,
} from "./pages";

import { loader as homeLoader } from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader:homeLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "tools",
        element: <Tools />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "lands",
        element: <LandListings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/postLands",
    element: <PostLands />,
    errorElement: <Error />,
  },
  {
    path: "/postProducts",
    element: <PostProducts />,
    errorElement: <Error />,
  },
  {
    path: "/postTools",
    element: <PostTools/>,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



// json-server --watch products.json --port 8080