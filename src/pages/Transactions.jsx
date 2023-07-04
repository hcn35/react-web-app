import { useEffect } from "react";
import DataTable from "../ui/DataTable";
import { Space } from "antd";
import { getTransactions } from "../services/apiTransactions";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    sorter: true,
    width: "20%",
  },
  {
    title: "Description",
    dataIndex: "description",
    width: "30%",
  },
  {
    title: "Category",
    dataIndex: "category",
    width: "20%",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    width: "20%",
  },
  {
    title: "",
    dataIndex: "actions",
    width: "10%",
    render: () => (
      <Space size="middle">
        <a>Edit</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    date: "10/10/2021",
    description: "Groceries",
    category: "Food",
    amount: "$100.00",
  },
  {
    key: "2",
    date: "10/10/2021",
    description: "Groceries",
    category: "Food",
    amount: "$100.00",
  },
  {
    key: "3",
    date: "10/10/2021",
    description: "Groceries",
    category: "Food",
    amount: "$100.00",
  },
];

export default function Transactions() {
  useEffect(() => {
    getTransactions().then((data) => console.log(data));
  }, []);
  return <DataTable columns={columns} data={data} />;
}
