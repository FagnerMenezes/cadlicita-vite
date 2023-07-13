import { FaBell } from "react-icons/fa";
import avatar from "../../../assets/img/meu-avatar.png";
function HeaderContent() {
  return (
    <div className="flex justify-around sm:justify-between sm:w-full">
      <h5 className="sm:text-lg font-serif font-bold">ER COMERCIAL</h5>
      <div className="flex justify-center items-center text-lg font-bold"></div>
      <div className="flex justify-around items-center gap-2">
        <FaBell />
        <img className="w-12 border rounded-full" alt="Avatar" src={avatar} />
        {/* <Email>licitacoes1@eduar.com.br</Email> */}
      </div>
    </div>
  );
}

export default HeaderContent;
