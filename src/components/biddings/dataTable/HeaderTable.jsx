import PropTypes from "prop-types";
import Filter from "./DataTableFilter";

export default function HeaderTable({ title, text, OnclickSearch, OnKeyDown }) {
  return (
    <div className="w-full flex flex-wrap items-center p-2 ">
      <h1 className=" w-full text-2xl text-gray-500 font-semibold">{title}</h1>
      {/* <div className="flex justify-end items-center w-full g-2">
        <div className="flex w-full max-w-[350px] justify-center items-center border rounded-md h-12 bg-white p-2 gap-2 hover:border-indigo-400  ">
          <input
            type="search"
            className="outline-none h-8 w-full"
            value={text}
            onKeyDown={OnKeyDown}
          />
          <FaFilter
            className="text-blue-600 m-1  hover:cursor-pointer"
            onClick={OnclickSearch}
          />
        </div>
      </div> */}
      <Filter
        text={text}
        OnclickButtonFilter={OnclickSearch}
        OnkeyDownFilter={OnKeyDown}
      />
    </div>
  );
}
HeaderTable.propTypes = {
  title: PropTypes.string,
  OnclickSearch: PropTypes.func,
  text: PropTypes.string,
  OnKeyDown: PropTypes.func,
};
