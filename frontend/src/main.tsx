import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";

import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <App />
      },
    ]
  },
  {
    path: "contacts/:contactId",
    element: <ContactPage />,
  },
  {
    path: "product/:productId",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
