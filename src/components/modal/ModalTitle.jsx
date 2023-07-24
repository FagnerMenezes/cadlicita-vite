import PropsTypes from "prop-types";
const ModalTitle = ({ title }) => {
  return (
    <>
      <div
        id="modal-title"
        className="text-base font-semibold leading-6 text-gray-900"
      >
        <h1>{title}</h1>
      </div>
    </>
  );
};
ModalTitle.propTypes = {
  title: PropsTypes.string,
};
export default ModalTitle;
