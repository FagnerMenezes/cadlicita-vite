import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropsTypes from "prop-types";

const MODAL_SIZE = {
  sm: "max-w-[550px] ",
  md: "max-w-[850px]",
  lg: "max-w-[1150px]",
  default: "w-auto",
};

const Modal = ({ title, children, handleOpen, open, size = "default" }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full transform
                ${MODAL_SIZE[size] || MODAL_SIZE.default} 
                overflow-hidden rounded-2xl bg-white p-6 text-left
                 align-middle shadow-xl transition-all`}
              >
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-gray-900 border-b-2 p-2"
                >
                  {title}
                </Dialog.Title>
                {/* BODY */}
                <div className="container ">{children}</div>
                {/* FOOTER */}
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleOpen}
                  >
                    Fechar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

Modal.propTypes = {
  title: PropsTypes.string,
  children: PropsTypes.array,
  handleOpen: PropsTypes.func,
  open: PropsTypes.bool,
  size: PropsTypes.string,
};

export default Modal;
