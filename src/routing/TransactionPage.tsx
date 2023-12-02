import Input from "../components/Input";

const TransactionPage = () => {
  return (
    <>
      <section className="px-6">
        <Input name="date" label="تاریخ" />
        <Input name="date" label="مبلغ" />
        <Input name="date" label="دسته بندی" />
        <Input name="date" label="یادداشت" />
      </section>
    </>
  );
};

export default TransactionPage;
