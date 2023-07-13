import { Outlet } from "react-router-dom";
function Main() {
  return (
    <div
      className="
        col-span-12
        bg-slate-100
        border-l-2
        border-t-2 
        rounded-ss-xl p-4 min-h-[100vh] sm:ml-0 ml-1"
    >
      <Outlet />
    </div>
  );
}
export default Main;
