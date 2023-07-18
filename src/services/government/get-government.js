import api from "./index";

async function getGovernment() {
  return await api
    .get("processos?", {
      params: {
        start: "1990-01-01",
        end: "2050-12-31",
        skip: 0,
        limit: 1000,
      },
    })
    .then((response) => {
      return response.data.process;
    })
    .catch((error) => error);
}
export default {
  getGovernment,
};
