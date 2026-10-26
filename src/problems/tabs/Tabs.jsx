import { useState } from "react";
import "./tab.css";

const TAB = [
  {
    id: 0,
    title: "Profile",
    description: "Name and avatar.",
    tags: ["user", "info"],
  },
  {
    id: 1,
    title: "Alerts",
    description: "Choose updates.",
    tags: ["email", "push"],
  },
  {
    id: 2,
    title: "Settings",
    description: "Theme and language.",
    tags: ["dark", "en"],
  },
  {
    id: 3,
    title: "Billing",
    description: "Invoices and payment methods.",
    tags: [],
  },
  {
    id: 4,
    title: "Security and privacy",
    description: "Passwords, two-factor sign-in, and connected devices.",
    tags: ["password", "2FA", "devices", "sessions"],
  },
  { id: 5, title: "Help", description: "Contact support.", tags: ["faq"] },
];
const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TAB[activeIndex];

  return (
    <div>
      <section className="tab-heading">
        <h1>Tabs</h1>
        <p>Click a tab, or use the arrow keys</p>
      </section>

      <div className="tab-name" role="tablist">
        {TAB.map((item, index) => (
          <Tab
            key={item.id}
            title={item.title}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <TabPanel description={active.description} tags={active.tags} />
    </div>
  );
};

export default Tabs;

function Tab({ title, isActive, onClick }) {
  return (
    <div>
      <button
        role="tab"
        className={isActive ? "tab active" : "tab"}
        aria-selected={isActive}
        onClick={onClick}
      >
        {title}{" "}
      </button>
    </div>
  );
}

function TabPanel({ description, tags }) {
  return (
    <div role="tabpanel">
      <p> {description} </p>
      <div>
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {" "}
            {tag}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
