import PropTypes from "prop-types";
export default function Pagination({ data }) {
  return <div className="flex w-full">Pagination{data}</div>;
}
Pagination.propTypes = {
  data: PropTypes.array,
};
