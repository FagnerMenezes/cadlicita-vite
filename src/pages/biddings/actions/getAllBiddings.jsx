import { services } from "../../../services/biddings/index";

const getAllBiddings = async () => {
  const response = await services.getAll();
  return response;
};
export default getAllBiddings;
