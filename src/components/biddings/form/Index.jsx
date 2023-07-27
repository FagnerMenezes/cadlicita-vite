import DataBiddingsPanel from "./DataBiddings";
import ContentForm from "./ContentForm.tsx";
import { ErrorMessage } from "@components/biddings/form/ErrorMessage";
import SelectForm from "../../select/SelectForm";

const Form = {
  Content: ContentForm,
  DataBiddings: DataBiddingsPanel,
  ErrorMessage,
  SelectForm,
};

export default Form;
