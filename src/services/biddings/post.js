import api from "../../services/index";

async function postBiddings(data) {
  const response = api.post(`processos/create/}`, data);
  return response;
}
export default postBiddings;
