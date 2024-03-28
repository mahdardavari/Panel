import { createBrowserRouter } from "react-router-dom";
import DepositWithdrawalPage from "./routing/DepositWithdrawalPage";
import ErrorPage from "./routing/ErrorPage";
import HomePage from "./routing/HomePage";
import Layout from "./routing/Layout";
import LoginPage from "./routing/LoginPage";
import PrivatePage from "./routing/PrivatePage";
import TransactionPage from "./routing/TransactionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "transaction", element: <TransactionPage /> },
      { path: "deposit-withdrawal", element: <DepositWithdrawalPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "private", element: <PrivatePage /> },

    ],
  },
]);

export default router;
