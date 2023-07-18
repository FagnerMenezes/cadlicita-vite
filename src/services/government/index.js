import axios from "axios";
export default axios.create({
  baseURL: "https://api-licitacao.vercel.app/",
  //baseURL: "http://www.cadlicita.kinghost.net:21052/",
});
