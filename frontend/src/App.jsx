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
  UserProfile,
  SingleTool,
  SingleLand,
  SingleProduct,
  Cart,
} from "./pages";

import { loader as homeLoader } from "./pages/Home";

import ProfileSetting from "./pages/ProfileSetting";

import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as singleLandLoader } from "./pages/SingleLand";
import { loader as singleToolLoader } from "./pages/SingleTool";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
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
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: "lands/:id",
        element: <SingleLand />,
        loader: singleLandLoader,
      },
      {
        path: "tools/:id",
        element: <SingleTool />,
        loader: singleToolLoader,
      },
      {
        path: "/postLands",
        element: <PostLands />,
      },
      {
        path: "/postProducts",
        element: <PostProducts />,
      },
      {
        path: "/postTools",
        element: <PostTools />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "profileSetting",
        element: <ProfileSetting />,
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// json-server --watch products.json --port 8080
