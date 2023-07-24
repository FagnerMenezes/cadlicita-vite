import PropsTypes from "prop-types";
const ModalButtons = ({ onclose, text, icon }) => {
  return (
    <>
      <button
        className="
        inline-flex
        w-auto
        justify-center 
        rounded-md bg-red-600 
        px-3 py-2 text-sm font-semibold text-white 
        shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
        onClick={() => onclose(false)}
      >
        {text}
        {icon}
      </button>
    </>
  );
};
ModalButtons.propTypes = {
  onclose: PropsTypes.func,
  text: PropsTypes.string,
  icon: PropsTypes.element,
};
export default ModalButtons;
