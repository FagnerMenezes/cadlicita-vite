import Swal from "sweetalert2";
import PropsTypes from "prop-types";

async function Alert({ title, text, icon }) {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    timer: 1800,
  });
}

const AlertConfirm = async ({ title, text }) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "SIM",
    cancelButtonText: "NÃO",
  });
};

const AlertResult = async ({ title, text }) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: title,
    text: text,
  });

  return Toast;
};

Alert.propTypes = {
  text_: PropsTypes.string,
};

export { Alert, AlertConfirm, AlertResult };
