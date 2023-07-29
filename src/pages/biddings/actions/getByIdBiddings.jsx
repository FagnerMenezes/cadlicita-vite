import { services } from "@services/biddings/index";

const getByIdBiddings = async (code) => {
  const response = await services.getById(code);
  return response;
};
export default getByIdBiddings;
