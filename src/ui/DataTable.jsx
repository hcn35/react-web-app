import { Table } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";

export default function DataTable({ columns, data }) {
  const [selectedRows, setSelectedRows] = useState([]);

  const rowSelection = {
    onChange: (_, selectedRows) => {
      setSelectedRows(selectedRows);
    },
    preserveSelectedRowKeys: true,
  };

  return (
    <Table
      columns={columns}
      // rowKey={(record) => record.login.uuid}
      dataSource={data}
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      bordered
      size="small"
      footer={() => `Selected ${selectedRows.length} items`}
    />
  );
}

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
