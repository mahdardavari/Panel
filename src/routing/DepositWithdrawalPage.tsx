import Table, { headers, tableData } from "../components/Table";

const DepositWithdrawalPage = () => {
  return (
    <>
      <Table headers={headers} tableData={tableData} />;
    </>
  );
};

export default DepositWithdrawalPage;
