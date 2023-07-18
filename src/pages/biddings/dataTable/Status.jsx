import Icons from "./Icons";
export default function Status(status) {
  const statusMapping = {
    Homologado: {
      icon: Icons.Homologado,
      className: "text-blue-700",
    },
    Empenho: {
      icon: Icons.Empenho,
      className: "text-green-600 ",
    },
    Cancelado: {
      icon: Icons.Cancelado,
      className: "text-red-800",
    },
    "Proposta enviada": {
      icon: Icons["Proposta enviada"],
      className: "text-cyan-600",
    },
    "Não arrematado": {
      icon: Icons["Não arrematado"],
      className: "text-red-600",
    },
    "Aguardando disputa": {
      icon: Icons["Aguardando disputa"],
      className: "text-green-400",
    },
    "Em analise": {
      icon: Icons["Em analise"],
      className: "text-orange-500",
    },
    Suspenso: {
      icon: Icons.Suspenso,
      className: "text-yellow-600",
    },
    "Cadastrar proposta": {
      icon: Icons["Cadastrar proposta"],
      className: "text-blue-600",
    },
    "Enviar documentos": {
      icon: Icons["Enviar documentos"],
      className: "text-yellow-800",
    },
    default: {
      className: "text-gray-600 border",
    },
  };
  const { icon, className } = statusMapping[status] || statusMapping.default;
  return (
    <>
      {icon ? (
        <span
          data-tootle="tooltip"
          title={status}
          className={`${className} flex flex-col justify-center items-center w-full gap-1`}
        >
          {icon}
          <span className={"text-xsm"}>{status}</span>
        </span>
      ) : (
        status
      )}
    </>
  );
}
