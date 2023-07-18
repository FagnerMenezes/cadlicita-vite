import { FaEdit, FaTrash } from "react-icons/fa";
import Status from "./Status";

const Rows = (dataGovernment, OnClickDelete) => {
  return dataGovernment.map((item) => {
    const {
      bidding_notice,
      date_finish,
      status: { name: statusName },
    } = item.process_data;

    const [{ _id: code_Gvernment, name: governmentName }] =
      item.government.filter((org) => org.manager.includes("true"));
    return {
      edital: bidding_notice,
      orgao: governmentName,
      data_final: new Date(date_finish).toLocaleDateString(),
      portal: item.process_data.portal.name,
      status: Status(statusName),
      e: (
        <FaTrash
          className="text-red-500 "
          data-te-toggle="tooltip"
          title={"excluir"}
          onClick={() => OnClickDelete(item._id)}
        />
      ),
      d: (
        <FaEdit
          className="text-cyan-600 cursor-pointer"
          title={"editar"}
          data-te-toggle="tooltip"
        />
      ),
      s: statusName,
      id: item._id,
    };
  });
};
export default Rows;
