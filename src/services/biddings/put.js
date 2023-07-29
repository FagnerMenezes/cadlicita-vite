import api from "../index";

async function putBiddings(data, code) {
  const response = api.put(`processos/update/${code}}`, data);
  return response;
}
export default putBiddings;
