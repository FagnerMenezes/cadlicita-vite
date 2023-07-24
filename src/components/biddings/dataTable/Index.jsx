import HeaderTable from "./HeaderTable";
import DataTableRows from "./DataTableRows";
import DataTableColumns from "./DataTableColumns";
import DataTableStatus from "./Status";
import DataTableIcons from "./Icons";
import DataTableFilter from "./DataTableFilter";
import DataTableRowsStyles from "./StylesRows";
import DataTableCustomStyles from "./CustomStyle";
import DataTableFilterItem from "./FilterItems";
import DataTableActions from "./actions";

const DataTable = {
  Header: HeaderTable,
  Rows: DataTableRows,
  Columns: DataTableColumns,
  RowsStatus: DataTableStatus,
  Icons: DataTableIcons,
  Filter: DataTableFilter,
  RowsStyles: DataTableRowsStyles,
  CustomStyles: DataTableCustomStyles,
  FilterItems: DataTableFilterItem,
  Actions: DataTableActions,
};
export default DataTable;
