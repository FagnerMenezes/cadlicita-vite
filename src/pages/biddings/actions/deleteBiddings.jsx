import { services } from "../../../services/biddings/index";
import { Alert, AlertConfirm } from "@/components/alert/Alert";

async function deleteBiddings(code, text) {
  try {
    (async () => {
      AlertConfirm({
        title: "Excluir o cadastro ? - " + text,
        text: "Se você confirmar, não poderá reverte.",
      }).then((result) => {
        if (result.isConfirmed) {
          (async () => {
            await services.delete(code);
            Alert({ title: "", text: "Cadastro excluido!" });
          })();
        }
      });
    })();
  } catch (error) {
    console.error(error);
  } finally {
    // setIsLoading(false);
  }
}

export default deleteBiddings;
