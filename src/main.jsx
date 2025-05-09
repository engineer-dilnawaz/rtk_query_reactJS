import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { api } from "./services/apiSlice.js";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // With store
      <Provider store={store}>
        <App />
      </Provider>
      // without store RTK QUERY
      // <ApiProvider api={api}>
      //   <App />
      // </ApiProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <p>Contact Us</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
