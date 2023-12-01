import { createBrowserRouter } from "react-router-dom";

import HomePage from "./routing/HomePage";
import TransactionPage from "./routing/TransactionPage";
import DepositWithdrawalPage from "./routing/DepositWithdrawalPage";
import Layout from "./routing/Layout";
import ErrorPage from "./routing/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "transaction", element: <TransactionPage /> },
      { path: "deposit-withdrawal", element: <DepositWithdrawalPage /> },
    ],
  },
]);

export default router;
