import { FaFilter } from "react-icons/fa";
import PropTypes from "prop-types";

function DataTableFilter({ text, OnkeyDownFilter, OnclickButtonFilter }) {
  return (
    <div className="flex justify-end items-center g-2">
      <div className="flex min-w-[400px] sm:w-full justify-center items-center border rounded-md h-12 bg-white p-2 gap-2 hover:border-indigo-400  ">
        <input
          type="search"
          className="outline-none h-8 w-full"
          value={text}
          onKeyDown={OnkeyDownFilter}
        />
        <FaFilter
          className="text-blue-600 m-1  hover:cursor-pointer"
          onClick={OnclickButtonFilter}
        />
      </div>
    </div>
  );
}

DataTableFilter.propTypes = {
  text: PropTypes.string,
  OnkeyDownFilter: PropTypes.func,
  OnclickButtonFilter: PropTypes.func,
};

export default DataTableFilter;
