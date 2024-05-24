import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Repository } from "./pages/Repository";

export const Routes = () => {
  const publicRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/repos/:username",
      element: <Repository />,
    },
  ];

  const router = createBrowserRouter([...publicRoutes]);

  return <RouterProvider router={router} />;
};
