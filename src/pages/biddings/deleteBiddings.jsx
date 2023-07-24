import Table from "../../components/biddings/dataTable/index";
import { Alert, AlertConfirm, AlertResult } from "../../components/alert/Alert";

async function deleteBiddings(code, text) {
  try {
    (async () => {
      AlertConfirm({
        title: "Excluir cadastro ? - " + text,
        text: "Se você confirmar, não poderá reverte.",
      }).then((result) => {
        if (result.isConfirmed) {
          (async () => {
            await Table.Actions.delete(code);
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
