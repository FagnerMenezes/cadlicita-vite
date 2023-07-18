export default function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center w- h-full gap-3">
      <div className=" inline-block h-24 w-24 animate-spin rounded-full border-4 border-blue-300 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      <p className="text-cyan-700">Carregando...</p>
    </div>
  );
}
