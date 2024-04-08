import { motion } from "framer-motion";
import React from "react";

interface TabProps {
  isSelected: boolean;
  onSelect: () => void;
  children: React.ReactNode;
}

function Tab({ isSelected, onSelect, children }: TabProps) {
  return (
    <li>
      <button
        className={`${
          isSelected
            ? "bg-transparent text-background border-b-2text-bold"
            : "text-muted text-bold"
        } px-2 py-1 text-left cursor-pointer rounded-t-lg`}
        onClick={onSelect}
      >
        {children}
      </button>
      {isSelected && (
        <motion.div
          layoutId="tab-indicator"
          className="active-tab-indicator border-primary border-b-4 rounded-b-lg"
        />
      )}
    </li>
  );
}

interface PortfolioTabsProps {
  selectedType: string;
  onSelectType: (type: string) => void;
  portfolio: {
    website: any[];
    UIUX: any[];
  };
  children?: React.ReactNode;
}

export default function PortfolioTabs({
  selectedType,
  onSelectType,
  portfolio,
  children,
}: PortfolioTabsProps) {
  return (
    <>
      <menu id="tabs" className="flex gap-4 mb-4">
        <Tab
          isSelected={selectedType === "website"}
          onSelect={() => onSelectType("website")}
        >
          Website Portfolio
        </Tab>
        <Tab
          isSelected={selectedType === "UIUX"}
          onSelect={() => onSelectType("UIUX")}
        >
          UIUX / Design
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
}
