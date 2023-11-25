import {Fragment} from "react";
import {Provider} from "context";
import {Page404, Welcome, Room} from "pages";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route
        path="/"
        element={
          <Provider>
            <Welcome />
          </Provider>
        }
      />
      <Route
        path="/room/:roomId"
        element={
          <Provider>
            <Room />
          </Provider>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Fragment>
  )
);

export const Router = () => <RouterProvider router={router} />;
