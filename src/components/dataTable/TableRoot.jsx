import PropTypes from "prop-types";
import Table from "./index";

export default function DataTable({ header, rows, columns, pagination }) {
  return (
    <div className="flex flex-col">
      <Table.Header header={header}></Table.Header>
      <Table.Columns columns={columns}></Table.Columns>
      <Table.Rows rows={rows}></Table.Rows>
      <Table.Pagination data={pagination}></Table.Pagination>
    </div>
  );
}
DataTable.propTypes = {
  header: PropTypes.array,
  rows: PropTypes.array,
  columns: PropTypes.array,
  pagination: PropTypes.array,
};
