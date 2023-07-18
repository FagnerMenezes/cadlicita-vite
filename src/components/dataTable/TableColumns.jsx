import PropTypes from "prop-types";
export default function TableHeader({ columns }) {
  return <div className="flex w-full">columns{columns}</div>;
}
TableHeader.propTypes = {
  columns: PropTypes.array,
};
