import {Fragment} from "react";
import {Page404, Room, Welcome} from "pages";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<Welcome />} />
      <Route path="/room" element={<Room />} />
      <Route path="*" element={<Page404 />} />
    </Fragment>
  )
);

export const Router = () => <RouterProvider router={router} />;
