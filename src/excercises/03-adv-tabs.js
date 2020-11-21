import React, { useState } from "react";

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs-panels">
        {data.map((tab, index) => (
          <div
            key={index}
            className={`
              tab-panel 
              ${activeTab === index ? "active-tab" : ""}
            `}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tabs-list">
        {data.map((tab, index) =>
          index === activeTab ? (
            <div key={index} id={tab.label}>
              {tab.description}
            </div>
          ) : null
        )}
      </div>
    </div>
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

// The main goal is to make this component a little more flexible, take a moment to analyze the following requirements:
// - What if we want to add more features like showing the tab list content above the tabs.
// - What if we want to disable an specific tab?
//
// If you start thinking about adding new props to control those behaviors,
// now you are facing the maintenance issue every developer is scared to.
//
// Would be much better if we have something like this, isn't it?
//  <Tabs>
//    <TabsPanels>
//      <TabPanel>First Tab</TabPanel>
//    </TabsPanels>
//    <TabsList>
//      <Tab>First tab content</Tab>
//    </TabsList>
//  </Tabs>;

function TabsComponent() {
  return <Tabs data={tabItems} />;
}

export default TabsComponent;
