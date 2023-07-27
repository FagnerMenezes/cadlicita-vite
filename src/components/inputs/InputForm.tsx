import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  textLabel?: string;
}

const InputForm = (props: InputProps) => {
  const { register } = useFormContext();
  return (
    <div className="relative z-0 w-full mb-6 group p-2">
      <input
        type={props.type}
        id={props.name}
        className="block py-2.5 px-0 w-full text-sm text-gray-700 
        bg-transparent border-0 border-b-2 border-gray-300 
        appearance-none dark:text-gray-800 dark:border-gray-300
         dark:focus:border-blue-500 focus:outline-none focus:ring-0 
         focus:border-blue-600 peer"
        placeholder=" "
        {...register(props.name)}
        {...props}
      />
      <label
        htmlFor={props.name}
        className="peer-focus:font-medium absolute text-md
         text-gray-500 dark:text-gray-400 duration-300 
         transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
         peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
         peer-focus:-translate-y-6"
      >
        {props.textLabel}
      </label>
    </div>
  );
};
export default InputForm;
