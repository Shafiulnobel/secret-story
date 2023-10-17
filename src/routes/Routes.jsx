import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Reviews from "../pages/Reviews/Reviews";
import About from "../pages/About/About";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Shop from "../pages/Shop/Shop";
import reviewLoaders from "../reviewLoaders";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/review",
          element: <Reviews></Reviews>,
          loader:reviewLoaders
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
            path:'product/:productId',
            element:<ProductDetail></ProductDetail>
         },
         {
            path:'shop',
            element:<Shop></Shop>
         },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "*",
          element:<NotFound></NotFound>
        },
      ],
    },
  ]);
  
export default router;