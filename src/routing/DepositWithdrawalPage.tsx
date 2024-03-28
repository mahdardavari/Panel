import Table, { headers, tableData } from "src/components/share/Table";
import usePost from "../hooks/usePosts";

const DepositWithdrawalPage = () => {
  const { data, error, isLoading } = usePost(2);

  if (isLoading) return <p>loading ...</p>;
  if (error) return <p>{error.message}</p>;

  console.log("data", data);

  return (
    <>
      <Table headers={headers} tableData={tableData} />;
    </>
  );
};

export default DepositWithdrawalPage;
