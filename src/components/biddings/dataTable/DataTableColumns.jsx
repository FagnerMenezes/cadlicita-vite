const columns = [
  {
    name: "Órgão",
    sortable: true,
    selector: (row) => row.orgao,
  },
  {
    name: "Edital",
    sortable: true,
    selector: (row) => row.edital,
  },
  {
    name: "Data disputa",
    sortable: true,
    selector: (row) => row.data_final,
  },
  {
    name: "Portal",
    sortable: true,
    selector: (row) => row.portal,
  },
  {
    name: "Status",
    sortable: true,
    selector: (row) => row.status,
    center: true,
  },
  { name: "#", sortable: true, selector: (row) => row.e, maxWidth: "10px" },
  { name: "#", sortable: true, selector: (row) => row.d, maxWidth: "10px" },
];
export default columns;
