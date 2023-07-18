import PropTypes from "prop-types";
import { FaFilter, FaSearch } from "react-icons/fa";
export default function HeaderTable({ title, text, OnclickSearch, OnKeyDown }) {
  return (
    <div className="w-full flex flex-wrap items-center p-2 ">
      <h1 className=" w-full text-2xl text-gray-500 font-semibold">{title}</h1>
      <div className="flex justify-end items-center w-full g-2">
        <div className="flex w-auto justify-center border border-r-transparent rounded-md rounded-r-none h-8 bg-white p-2 gap-2 hover:border-indigo-400  ">
          <FaSearch className="text-gray-400" />
          <input
            type="search"
            className="outline-none h-5"
            value={text}
            onKeyDown={OnKeyDown}
          />
        </div>
        <button
          className="group border h-8 hover:bg-blue-700 hover:text-white outline-indigo-400"
          title={"Localizar"}
          onClick={OnclickSearch}
        >
          <FaFilter className="text-blue-600 m-1 hover:text-white group" />
        </button>
      </div>
    </div>
  );
}
HeaderTable.propTypes = {
  title: PropTypes.string,
  OnclickSearch: PropTypes.func,
  text: PropTypes.string,
  OnKeyDown: PropTypes.func,
};
