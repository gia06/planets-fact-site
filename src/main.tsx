import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Mercury from "./components/Mercury";
import Earth from "./components/Earth";
import Mars from "./components/Mars";
import Root from "./Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<Root />}>
      <Route path="mercury" element={<Mercury />} />
      {/* <Route path="venus" element={} /> */}
      <Route path="earth" element={<Earth />} />
      <Route path="mars" element={<Mars />} />
      {/* <Route path="jupiter" element={} /> */}
      {/* <Route path="saturn" element={} /> */}
      {/* <Route path="uranus" element={} /> */}
      {/* <Route path="neptune" element={} /> */}
      <Route path="*" element={<Navigate to="/mercury" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
