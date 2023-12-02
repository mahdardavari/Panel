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
        {/* TODO use https://www.npmjs.com/package/tailwind-merge  */}
        <Button cls="mt-14">ذخیره</Button>
      </section>
    </>
  );
};

export default TransactionPage;
