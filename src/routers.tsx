import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routing/ErrorPage";
import HomePage from "./routing/HomePage";
import Layout from "./routing/Layout";
import LoginPage from "./routing/LoginPage";
import PrivatePage from "./routing/PrivatePage";
import TodosPAge from "./routing/TodosPAge";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "private", element: <PrivatePage /> },
      { path: "todos", element: <TodosPAge /> },

    ],
  },
]);

export default router;
