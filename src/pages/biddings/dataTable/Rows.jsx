import { FaEdit, FaTrash } from "react-icons/fa";
import Status from "./Status";

const Rows = (dataGovernment) => {
  return dataGovernment.map((item) => {
    const {
      bidding_notice,
      date_finish,
      status: { name: statusName },
    } = item.process_data;

    const [{ _id, name: govermentName }] = item.government.filter((org) =>
      org.manager.includes("true")
    );
    return {
      edital: bidding_notice,
      orgao: govermentName,
      data_final: new Date(date_finish).toLocaleDateString(),
      portal: item.process_data.portal.name,
      status: Status(statusName),
      //TODO create className tailwindcss for buttons delete
      e: <FaTrash className="text-red-500 cursor-pointe" />,
      //TODO create className tailwindcss for buttons edit
      d: <FaEdit className="text-cyan-600 cursor-pointer" />,
      s: statusName,
      id: _id,
    };
  });
};
export default Rows;
