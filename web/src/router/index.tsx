import {Page404, Welcome, Room, Root} from "pages";
import {RouterProvider, createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "room/:roomId",
        element: <Room />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
