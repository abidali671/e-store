"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LayoutContext } from "../hooks/useContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <LayoutContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      <div className="flex ">
        <div
          className={`md:w-3/12 w-0 ${
            isCollapsed
              ? "flex-shrink-0 flex-grow-0 w-full  transition-all duration-500"
              : " "
          }`}
        >
          <Sidebar />
        </div>
        <div
          className={`md:w-9/12 w-full ${
            isCollapsed ? "flex-1  hidden md:block" : " "
          }`}
        >
          {children}
        </div>
      </div>
    </LayoutContext.Provider>
  );
}
