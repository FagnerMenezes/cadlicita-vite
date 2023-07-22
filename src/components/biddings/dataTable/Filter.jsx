import { FaFilter } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Filter({ text, OnkeyDown, OnclickFilter }) {
  return (
    <div className="flex w-auto justify-center border border-r-transparent rounded-md rounded-r-none h-8 bg-white p-2 gap-2 hover:border-indigo-400  ">
      <input
        type="search"
        className="outline-none h-5"
        value={text}
        onKeyDown={OnkeyDown}
      />
      <FaFilter
        className="text-gray-400 hover:cursor-pointer"
        onClick={OnclickFilter}
      />
    </div>
  );
}

Filter.propTypes = {
  text: PropTypes.string,
  OnkeyDown: PropTypes.func,
  OnclickFilter: PropTypes.func,
};
