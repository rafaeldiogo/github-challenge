import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";

export const Routes = () => {
  const publicRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  const router = createBrowserRouter([...publicRoutes]);

  return <RouterProvider router={router} />;
};
