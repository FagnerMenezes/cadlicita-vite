import { useFormContext, UseFormRegister, Path } from "react-hook-form";

type ISelectedProps = {
  name: string;
  label: string;
  options: [
    {
      name: string;
    }
  ];
};

const SelectForm = (props: ISelectedProps) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col p-2">
      <label className="text-md text-slate-400">{props.label}</label>
      <select
        {...register(props.name)}
        className="border rounded-lg p-2 outline-indigo-600 mt-4 "
      >
        {props.options.map((item, i) => (
          <option value={item.name} key={i}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectForm;
