import PropsTypes from "prop-types";

const MODAL_SIZE = {
  sm: "min-w-[550px] ",
  md: "min-w-[850px]",
  lg: "min-w-[1150px]",
  default: "w-auto",
};

const ModalBody = ({ children, size = "default" }) => {
  return (
    <div
      className={`body relative
    flex flex-col justify-center items-center bg-white border rounded-lg p-2 shadow-xl ${
      MODAL_SIZE[size] || MODAL_SIZE.default
    }`}
    >
      {children}
    </div>
  );
};
ModalBody.propTypes = {
  children: PropsTypes.array,
  size: PropsTypes.string,
};
export default ModalBody;
