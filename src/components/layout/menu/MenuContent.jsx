import PropTypes from "prop-types";

function MenuContent({ children }) {
  return <div className="flex sm:flex-col justify-center">{children}</div>;
}

MenuContent.propTypes = {
  children: PropTypes.node,
};

export default MenuContent;
