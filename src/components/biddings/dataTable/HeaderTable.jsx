import PropTypes from "prop-types";
import Filter from "./DataTableFilter";

export default function HeaderTable({ title, text, OnclickSearch, OnKeyDown }) {
  return (
    <div className="w-full flex flex-wrap items-center p-2 ">
      <h1 className=" w-full text-2xl text-gray-500 font-semibold">{title}</h1>
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
