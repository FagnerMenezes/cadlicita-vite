import { useState } from "react";
import { Tab } from "@headlessui/react";
import PropsTypes from "prop-types";
import TabItem from "./TabListItem";
export default function TabList({ categories }) {
  const [active, setActive] = useState(0);

  function activeTab(action) {
    setActive(action);
  }

  return (
    <Tab.List className="flex w-full space-x-1 rounded-xl bg-blue-600 p-1 text-white">
      {categories.map((category, i) => (
        <>
          <TabItem
            category={category}
            active={active}
            iterator={i}
            activeTabIndex={activeTab}
          />
        </>
      ))}
    </Tab.List>
  );
}

TabList.propTypes = {
  categories: PropsTypes.arrayOf(PropsTypes.element),
};
