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

  const addTransaction = useMutation<Transaction,Error,Transaction>({
    mutationFn: (transaction: Transaction) =>
      axios.post("/api/transactions/", transaction).then((res) => res.data),
    onError: (error) => error.message,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess: (savedTransaction, newTrs) => {
      console.log("x", savedTransaction);
      queryClient.setQueryData<Transaction[]>(
        ["transaction"],
        (transaction) => [savedTransaction, ...transaction || []]
      );
    },
  });

  return (
    <>
    {addTransaction.error && addTransaction.error.message}
      <section className="px-6">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addTransaction.mutate({
              amount: 100000,
              category: "xx",
              datetime: Date.now().toString(),
              note: "note",
              type: "type",
            });
          }}
        >
          <Input name="date" label="تاریخ" />
          <Input name="date" label="مبلغ" />
          <Input name="date" label="دسته بندی" />
          <Input name="date" label="یادداشت" />

          <div className="w-11/12 mt-14 m-auto">
            <Button>ذخیره</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default TransactionPage;
