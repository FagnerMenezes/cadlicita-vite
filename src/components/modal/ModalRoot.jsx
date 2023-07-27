import PropsTypes from "prop-types";

const ModalRoot = ({ children }) => {
  return (
    <>
      <div
        className="relative z-10 "
        role={"dialog"}
        aria-modal={true}
        aria-labelledby="modal-title"
      >
        <div className="dialog backdrop-brightness-50 fixed inset-0 z-10 overflow-y-auto ">
          <div
            className="panel flex flex-col min-h-full items-end 
          justify-center p-4 text-center sm:items-center sm:p-0 bg-blue-800"
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
ModalRoot.propTypes = {
  children: PropsTypes.array,
};

export default ModalRoot;
