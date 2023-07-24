import PropsTypes from "prop-types";
import { FaExclamationTriangle } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

const iconName = ["success", "error", "warning"];

const IconsModal = {
  success: (
    <BsFillCheckCircleFill
      className="h-6 w-6 text-green-600"
      aria-hidden="true"
    />
  ),
  error: (
    <FaExclamationTriangle
      className="h-6 w-6 text-red-600"
      aria-hidden="true"
    />
  ),
  warning: (
    <FaExclamationTriangle
      className="h-6 w-6 text-orange-500"
      aria-hidden="true"
    />
  ),
  default: {},
};

const ModalIcon = ({ icons }) => {
  return (
    <div
      className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center 
      justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10>`}
    >
      {IconsModal[icons] || IconsModal.default}
    </div>
  );
};
ModalIcon.propTypes = {
  children: PropsTypes.array,
  icons: PropsTypes.arrayOf(PropsTypes.string < iconName > []),
};
export default ModalIcon;
