import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";

import "./App.scss";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "shop",
          element: <Shop />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
