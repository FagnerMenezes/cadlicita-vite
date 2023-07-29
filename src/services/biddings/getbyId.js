import api from "@/services/index";

export default function deleteBiddings(code) {
  const response = api.get(`processos/delete/${code}`);
  return response.data;
}
