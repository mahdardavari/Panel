import Button from "../components/Button";
import Input from "../components/Input";

const TransactionPage = () => {
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
