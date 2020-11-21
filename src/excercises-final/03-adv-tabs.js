import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext();

const useTabsContext = () => {
  const values = useContext(TabsContext);

  if (!values) {
    throw new Error("You must wrap your elements inside a `Tabs` component");
  }

  return values;
};

const Tabs = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

const TabsPanels = ({ children }) => {
  return <div className="tabs-panels">{children}</div>;
};

const TabPanel = ({ children, id, isDisabled }) => {
  const { setActiveTab, activeTab } = useTabsContext();
  return (
    <div
      className={`
        tab-panel
        ${activeTab === id && !isDisabled ? "active-tab" : ""}
        ${isDisabled ? "disabled" : ""}
      `}
      onClick={isDisabled ? null : () => setActiveTab(id)}
    >
      {children}
    </div>
  );
};

const TabsList = ({ children }) => {
  return <div className="tabs-list">{children}</div>;
};

const Tab = ({ children, id }) => {
  const { activeTab } = useTabsContext();
  return activeTab === id ? children : null;
};

const DataTabs = ({ data }) => {
  return (
    <Tabs defaultTab={0}>
      <TabsPanels>
        {data.map((tab, index) => (
          <TabPanel key={index} id={index}>
            {tab.label}
          </TabPanel>
        ))}
      </TabsPanels>
      <TabsList>
        {data.map((tab, index) => (
          <Tab key={index} id={index}>
            {tab.description}
          </Tab>
        ))}
      </TabsList>
    </Tabs>
  );
};

const tabItems = [
  {
    label: "🌮 Tacos",
    description: <p>Tacos are awesome!</p>,
  },
  {
    label: "🌯 Burritos",
    description: <p>Burritos are tasty</p>,
  },
  {
    label: "🍕 Pizza",
    description: <p>Pizza is amazing</p>,
  },
  {
    label: "🍩 Donuts",
    description: <p>Super good with hot chocolate 🍫☕</p>,
  },
];

function TabsComponent() {
  return <DataTabs data={tabItems} />;
}

export default TabsComponent;
