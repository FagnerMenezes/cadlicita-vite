import { useState } from "react";
import { Tab } from "@headlessui/react";
import TabForm from "@components/Tab/Index";
import FormPanel from "@components/biddings/form/Index";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { CreateDataBinding, createDataBindingSchema } from "./Schema.js";

export default function ContentForm() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const createBiddingForm = useForm<CreateDataBinding>({
    resolver: zodResolver(createDataBindingSchema),
  });

  async function handleSubmitForm(data: CreateDataBinding) {
    const dataProcess = {
      process_data: data,
    };

    console.log(dataProcess);
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
    watch,
    control,
  } = createBiddingForm;

  return (
    <div className="container">
      <FormProvider {...createBiddingForm}>
        <form className=" p-4" onSubmit={handleSubmit(handleSubmitForm)}>
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <TabForm.List categories={TabForm.Category} />
            <Tab.Panels className="flex w-full p-3 ">
              <FormPanel.DataBiddings />
            </Tab.Panels>
          </Tab.Group>
          <input
            type="submit"
            value="Salvar"
            className="bg-blue-500 border rounded-md text-white font-bold p-2 min-w-[100px] hover:bg-blue-600 cursor-pointer"
          />
        </form>
      </FormProvider>
    </div>
  );
}
