import api from "../../../services/government/get-government";

const actions = {
  edit: () => {},
  delete: () => {},
  openModal: () => {},
  fetchData: async () => {
    const response = await api.getGovernment();
    return response;
  },
};

export default actions;

// TODO create events for the buttons
