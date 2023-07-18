import { methods } from "@/services/biddings/index";

const actions = {
  edit: () => {},
  //TODO create function edit items data table []
  //TODO create alert for function edit items data table []
  delete: async (code) => {
    const response = await methods.delete(code);
    return response;
  },
  //TODO create function delete items data table [x]
  //TODO create alert for function delete items data table []
  fetchData: async () => {
    const response = await methods.getAll();
    return response;
  },
};

export default actions;
