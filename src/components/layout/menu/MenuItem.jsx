import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaGavel, FaRegMoneyBillAlt, FaCalendar } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";

function MenuItem() {
  const [active, setActive] = useState(0);

  function activeButton(action) {
    setActive(action);
  }

  return (
    <>
      {/* HOME */}
      <li
        onClick={() => activeButton(1)}
        className={`${
          active === 1 ? "bg-blue-100  border-r-4 border-r-blue-300" : ""
        } 
            text-2xl 
            flex 
            justify-center 
            items-center 
            sm:w-20 p-1 hover:bg-blue-100 border-s
            before:content-[''] `}
      >
        <Link to="/" data-toogle="tooltip" title="Home" className={` `}>
          <FaHome className="text-blue-300" />
        </Link>
      </li>
      {/* PROCESSOS */}
      <li
        onClick={() => activeButton(2)}
        className={`${
          active === 2
            ? "bg-pink-100 border-r-4 border-r-pink-400 hover:bg-pink-100"
            : "hover:bg-blue-100"
        } text-2xl flex justify-center items-center sm:w-20 p-1 `}
      >
        <Link
          to="/processos"
          data-toogle="tooltip"
          title="Licitações"
          className="text-pink-400"
        >
          <FaGavel
            className={`${
              active === 2 ? " text-ping-400" : "hover:text-pink-400"
            } hover:text-pink-400`}
          />
        </Link>
      </li>
      {/* EMPENHOS */}
      <li
        onClick={() => activeButton(3)}
        className={`${
          active === 3
            ? "bg-green-100 border-r-4 border-r-green-600 hover:bg-green-100"
            : "hover:bg-blue-100"
        } text-2xl flex justify-center items-center sm:w-20 p-1 `}
      >
        <Link
          to="/empenhos"
          data-toogle="tooltip"
          title="Empenhos"
          className=" text-green-600"
        >
          <FaRegMoneyBillAlt
            className={`${
              active === 3 ? " text-green-600" : "hover:text-green-600"
            } hover:text-green-600`}
          />
        </Link>
      </li>
      {/* ÓRGAOS */}
      <li
        onClick={() => activeButton(4)}
        className={`${
          active === 4
            ? "bg-blue-200 border-r-4 border-r-blue-700 hover:bg-blue-100"
            : "hover:bg-blue-100"
        } text-2xl flex justify-center items-center sm:w-20 p-1 `}
      >
        <Link to="/orgaos" data-toogle="tooltip" title="Órgãos" className="">
          <RiGovernmentFill
            className={`${
              active === 4 ? " text-blue-800" : "hover:text-blue-800"
            } hover:text-blue-800 text-blue-800`}
          />
        </Link>
      </li>
      {/* CALENDARIO */}
      <li
        onClick={() => activeButton(5)}
        className={`${
          active === 5
            ? "bg-blue-100 border-r-4 border-r-blue-600 hover:bg-blue-100"
            : "hover:bg-blue-100"
        } text-2xl flex justify-center items-center sm:w-20 p-1 `}
      >
        <Link
          to="/calendar"
          data-toogle="tooltip"
          title="Boletins"
          className=""
        >
          <FaCalendar
            className={`${
              active === 5 ? " text-blue-600" : "hover:text-blue-600"
            } hover:text-blue-600 text-blue-600`}
          />
        </Link>
      </li>
    </>
  );
}

export default MenuItem;
