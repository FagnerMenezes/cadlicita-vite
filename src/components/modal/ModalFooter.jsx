import PropsTypes from "prop-types";
const ModalFooter = ({ children }) => {
  return (
    <div className="footer flex justify-end w-full bg-gray-50 px-4 py-3 gap-1 m-0">
      {children}
    </div>
  );
};
ModalFooter.propTypes = {
  children: PropsTypes.array,
};
export default ModalFooter;
