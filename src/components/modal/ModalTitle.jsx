import PropsTypes from "prop-types";
const ModalTitle = ({ title }) => {
  return (
    <>
      <div
        id="modal-title"
        className="text-base uppercase font-serif font-bold leading-6 text-slate-100 "
      >
        <h1 className="text-3xl">{title}</h1>
      </div>
    </>
  );
};
ModalTitle.propTypes = {
  title: PropsTypes.string,
};
export default ModalTitle;
