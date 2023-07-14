import PropTypes from "prop-types";
function GridMain({ children }) {
  return <div className="grid grid-cols-1 sm:grid-cols-12">{children}</div>;
}
GridMain.propTypes = {
  children: PropTypes.node,
};
export default GridMain;
