import {
  FaDatabase,
  FaMoneyBillAlt,
  FaListAlt,
  FaFileAlt,
  FaCommentAlt,
  FaFileArchive,
} from "react-icons/fa";
const categories = [
  {
    id: 1,
    name: "Dados Licitações",
    icon: <FaDatabase />,
  },
  {
    id: 2,
    name: "Empenhos",
    icon: <FaMoneyBillAlt />,
  },
  {
    id: 3,
    name: "Termo de Referência",
    icon: <FaListAlt />,
  },
  {
    id: 4,
    name: "Atas",
    icon: <FaFileAlt />,
  },
  {
    id: 5,
    name: "Anexos",
    icon: <FaFileArchive />,
  },
  {
    id: 6,
    name: "Acompanhamentos",
    icon: <FaCommentAlt />,
  },
];

export default categories;
