import deleteBiddings from "./delete-biddings.js";
import getBiddingsList from "./get-biddings.js";

export const methods = {
  getAll: getBiddingsList,
  delete: deleteBiddings,
};
