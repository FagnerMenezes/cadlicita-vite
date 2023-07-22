import PropTypes from "prop-types";
import Filter from "@/components/biddings/dataTable/Filter";

export default function HeaderTable({ title, text, OnclickSearch, OnKeyDown }) {
  return (
    <div className="w-full flex flex-wrap items-center p-2 ">
      <h1 className=" w-full text-2xl text-gray-500 font-semibold">{title}</h1>
      <div className="flex justify-end items-center w-full g-2">
        <Filter
          text={text}
          OnKeyDown={OnKeyDown}
          OnclickFilter={OnclickSearch}
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
};
