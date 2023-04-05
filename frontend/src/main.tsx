import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import CartPage from "./pages/CartPage";
import UserPage from "./pages/UserPage";

import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:4000" : "/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <App />,
      },
    ],
  },
  {
    path: "contacts/:contactId",
    element: <ContactPage />,
  },
  {
    path: "product/:productId",
    element: <ProductPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "signin",
    element: <SignInPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "user",
    element: <UserPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
