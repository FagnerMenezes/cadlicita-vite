import api from "@/services/index";

async function getBiddingsList() {
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
export default getBiddingsList;
