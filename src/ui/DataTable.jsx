import { Table, Space, Button } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";

export default function DataTable({ data, isLoading, mutate }) {
  const [selectedRows, setSelectedRows] = useState([]);
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
      render: (_, record) => {
        function handleDelete() {
          mutate(record.id);
        }
        return (
          <Space size="middle">
            <Button type="text" danger onClick={handleDelete}>
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  const rowSelection = {
    onChange: (_, selectedRows) => {
      setSelectedRows(selectedRows);
    },
    preserveSelectedRowKeys: true,
  };

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={data}
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      bordered
      loading={isLoading}
      size="small"
      footer={() => `Selected ${selectedRows.length} items`}
    />
  );
}

DataTable.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  mutate: PropTypes.func,
};
