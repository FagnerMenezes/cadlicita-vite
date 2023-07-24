import PropsTypes from "prop-types";
const ModalButtons = ({ onClickSave, text, icon }) => {
  return (
    <>
      <button
        className="bg-sky-600 inline-flex w-auto 
         justify-center rounded-md  px-3 py-2 
         text-sm font-semibold text-white shadow-sm hover:bg-sky-400 sm:ml-3 sm:w-auto gap-1"
        onClick={() => onClickSave()}
      >
        {icon}
        {text}
      </button>
    </>
  );
};
ModalButtons.propTypes = {
  onClickSave: PropsTypes.func,
  text: PropsTypes.string,
  icon: PropsTypes.element,
};
export default ModalButtons;
