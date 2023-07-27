import { Tab } from "@headlessui/react";
import Input from "@components/inputs/InputForm.js";
import { ErrorMessage } from "./ErrorMessage.js";
import SelectForm from "@components/select/SelectForm.js";
import { useFormContext, UseFormRegister, Path } from "react-hook-form";
import {
  Status,
  TypeDispute,
  Modality,
  Portal,
} from "@/services/biddings/selectedData.js";

export default function DataBiddingsPanel() {
  const { register } = useFormContext();
  return (
    <>
      <Tab.Panel className="data-biddings grid-cols-3 lg:grid gap-3 border rounded-md p-4 w-full">
        <div className="w-auto">
          <Input textLabel="Edital" name="bidding_notice" type="text" />
          <ErrorMessage field="bidding_notice" />
          <Input textLabel="Nº Processo" name="n_process" type="text" />
          <ErrorMessage field="n_process" />
          <Input textLabel="Data Inicial" name="date_init" type="date" />
          <ErrorMessage field="date_init" />
          <Input textLabel="Data Final" name="date_finish" type="date" />
          <ErrorMessage field="date_finish" />
          <Input
            textLabel="Horario disputa"
            name="hours_finish"
            type="time"
          ></Input>
          <ErrorMessage field="hours_finish" />
        </div>
        <div className="w-auto">
          <SelectForm name="status" options={Status} label=" Status" />
          <ErrorMessage field="status" />
          <SelectForm
            name="type_dispute"
            options={TypeDispute}
            label="Tipo disputa"
          />
          <ErrorMessage field="type_dispute" />
          <SelectForm name="modality" options={Modality} label="Modalidade" />
          <ErrorMessage field="modality" />
          <SelectForm name="portal" options={Portal} label="Portal" />
          <ErrorMessage field="portal" />
        </div>
        <div className="w-full border rounded-md  h-[350px] p-4">
          <Input textLabel="Objeto" name="object" type="text" />
          <ErrorMessage field="object" />
        </div>
      </Tab.Panel>
    </>
  );
}
