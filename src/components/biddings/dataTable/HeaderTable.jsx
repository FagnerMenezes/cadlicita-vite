import PropTypes from "prop-types";
import Filter from "./DataTableFilter";
import { FaPlusCircle } from "react-icons/fa";

export default function HeaderTable({
  title,
  text,
  OnclickSearch,
  OnKeyDown,
  handleClickButton,
}) {
  return (
    <div className="w-full flex flex-wrap items-center p-2 ">
      <h1 className=" w-full text-2xl text-gray-500 font-semibold">{title}</h1>
      <div className="flex justify-between items-center w-full gap-4">
        <button
          onClick={handleClickButton}
          className="flex justify-center items-center 
        gap-2 bg-indigo-500 hover:bg-indigo-600 border 
        rounded-l-2xl outline-none p-2 text-white font-bold w-32"
        >
          <FaPlusCircle /> Novo
        </button>
        <Filter
          text={text}
          OnclickButtonFilter={OnclickSearch}
          OnkeyDownFilter={OnKeyDown}
        />
      </div>
    </div>
  );
}
HeaderTable.propTypes = {
  title: PropTypes.string,
  OnclickSearch: PropTypes.func,
  text: PropTypes.string,
  OnKeyDown: PropTypes.func,
  handleClickButton: PropTypes.func,
};
