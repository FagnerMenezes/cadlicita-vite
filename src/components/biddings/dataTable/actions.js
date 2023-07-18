import deleteBiddings from "@/services/biddings/delete-biddings";
import api from "@/services/biddings/get-biddings";

const actions = {
  edit: () => {},
  //TODO create function edit items data table
  delete: async (code) => {
    const response = deleteBiddings(code);
    return response;
  },
  //TODO create function delete items data table
  fetchData: async () => {
    const response = await api.getBiddingsList();
    return response;
  },
};

export default actions;

// TODO create events for the buttons
