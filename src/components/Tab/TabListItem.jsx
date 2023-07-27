import { Tab } from "@headlessui/react";
import PropsTypes from "prop-types";

export default function TabListItem({
  category,
  active,
  iterator,
  activeTabIndex,
}) {
  return (
    <>
      <Tab
        key={category}
        className="w-full rounded-lg py-2.5 text-sm font-medium
             leading-5 text-wite first-letter:ring-white ring-opacity-60 
             ring-offset-2 ring-offset-wite focus:outline-none focus:ring-2 
             transition-all ease-in-out p-1"
      >
        <button
          type="button"
          className={`${
            active == iterator ? "underline decoration-amber-400" : ""
          } flex gap-2 justify-center items-center`}
          onClick={() => activeTabIndex(iterator)}
        >
          <p className="text-xl text-gray-100">{category.icon}</p>
          <span className="text-sm">{category.name}</span>
        </button>
      </Tab>
    </>
  );
}

TabListItem.propTypes = {
  category: PropsTypes.array,
  iterator: PropsTypes.number,
  active: PropsTypes.number,
  activeTabIndex: PropsTypes.func,
};
