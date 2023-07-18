import PropTypes from "prop-types";
export default function TableHeader({ header }) {
  return <div className="flex w-full">Header{header}</div>;
}
TableHeader.propTypes = {
  header: PropTypes.object,
};
