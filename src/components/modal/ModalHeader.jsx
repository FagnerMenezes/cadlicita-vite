import PropsTypes from "prop-types";
const ModalHeader = ({ children }) => {
  return (
    <div
      className={`header flex w-[650px]  ${
        children.type?.length == 1 ? "justify-center" : "justify-start"
      } items-center gap-4 
      mb-2 bg-blue-700 -m-8 h-20 border rounded-md 
      border-transparent p-2 shadow-md`}
    >
      {children}
    </div>
  );
};
ModalHeader.propTypes = {
  children: PropsTypes.array,
  onclose: PropsTypes.func,
};
export default ModalHeader;
