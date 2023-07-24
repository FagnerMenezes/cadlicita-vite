import PropsTypes from "prop-types";
const ModalContent = ({ children }) => {
  return (
    <div className="container flex h-auto items-end justify-center p-4 text-center sm:items-center sm:p-0">
      {children}
    </div>
  );
};
ModalContent.propTypes = {
  children: PropsTypes.array,
};
export default ModalContent;
