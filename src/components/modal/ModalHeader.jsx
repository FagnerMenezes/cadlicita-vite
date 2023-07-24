import PropsTypes from "prop-types";
const ModalHeader = ({ children }) => {
  return (
    <div className="header flex w-full justify-start items-center gap-4 mb-2">
      {children}
    </div>
  );
};
ModalHeader.propTypes = {
  children: PropsTypes.array,
  onclose: PropsTypes.func,
};
export default ModalHeader;
