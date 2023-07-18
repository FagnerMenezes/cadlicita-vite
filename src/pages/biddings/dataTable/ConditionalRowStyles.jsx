const conditionalRowStyles = [
  {
    when: (row) => row.s === "Cancelado",
    style: {
      color: "red",
    },
  },
  {
    when: (row) => row.s === "Proposta enviada",
    style: {
      color: "green",
    },
  },
];

export default conditionalRowStyles;
