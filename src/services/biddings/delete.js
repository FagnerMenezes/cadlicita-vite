import api from "@/services/index";

export default function deleteBiddings(code) {
  const response = api.delete(`processos/delete/${code}`);
  return response;
}
