import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Planet from "./pages/Planet";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<Root />}>
      <Route path="Mercury" element={<Planet />} />
      <Route path="venus" element={<Planet />} />
      <Route path="Earth" element={<Planet />} />
      <Route path="Mars" element={<Planet />} />
      <Route path="jupiter" element={<Planet />} />
      <Route path="saturn" element={<Planet />} />
      <Route path="uranus" element={<Planet />} />
      <Route path="neptune" element={<Planet />} />
      <Route path="*" element={<Navigate to="/Mercury" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
