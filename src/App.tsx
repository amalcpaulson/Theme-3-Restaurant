import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home";
import NotFound from "./pages/notFound";
import { DeliveryAddress } from "./pages/deliveryAddress";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/deliveryaddress",
      element: <DeliveryAddress />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
