import { AiFillDislike } from "react-icons/ai";
import { FaCheck, FaEnvelope, FaMoneyBill } from "react-icons/fa";
import { FcAlarmClock, FcCancel, FcDocument, FcUnlock } from "react-icons/fc";
import { FiSend } from "react-icons/fi";
import { GiMagnifyingGlass } from "react-icons/gi";

const STATUS_ICONS = {
  Homologado: <FaCheck />,
  "Enviar documentos": <FaEnvelope />,
  Cancelado: <FcCancel />,
  Empenho: <FaMoneyBill />,
  "Cadastrar proposta": <FcDocument />,
  Suspenso: <FcUnlock />,
  "Proposta enviada": <FiSend />,
  "Não arrematado": <AiFillDislike />,
  "Aguardando disputa": <FcAlarmClock />,
  "Em analise": <GiMagnifyingGlass />,
};

export default STATUS_ICONS;
