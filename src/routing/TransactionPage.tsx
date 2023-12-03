import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";

interface Transaction {
  type: string; // better use enums //income
  amount: number;
  datetime: string;
  note: string;
  category: string;
}

const TransactionPage = () => {
  const queryClient = useQueryClient();

  const addTransaction = useMutation({
    mutationFn: (transaction: Transaction) =>
      axios
        .post("/api/transactions/", transaction)

        .then((res) => res.data),
    onSuccess: (savedTransaction, newTransaction) => {
      console.log(savedTransaction);
      //Approach invalidating the cash

      queryClient.invalidateQueries({
        queryKey: ["transactionList"],
      });

      //APProach 2 updating data in the cash
      queryClient.setQueriesData<Transaction[]>(
        ["transactionList"],
        (transactionList) => [savedTransaction, ...transactionList!]
      );
    },
  });

  return (
    <>
      <section className="px-6">
        <Input name="date" label="تاریخ" />
        <Input name="date" label="مبلغ" />
        <Input name="date" label="دسته بندی" />
        <Input name="date" label="یادداشت" />

        <div className="w-11/12 mt-14 m-auto">
          <Button>ذخیره</Button>
        </div>
      </section>
    </>
  );
};

export default TransactionPage;
