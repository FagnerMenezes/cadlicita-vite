import DELETE from "./delete.js";
import GET from "./getAlls.js";
import GET_BY_ID from "./getbyId.js";
import POST from "./post.js";
import PUT from "./put.js";

export const services = {
  getAll: GET,
  getById: GET_BY_ID,
  delete: DELETE,
  post: POST,
  put: PUT,
};
