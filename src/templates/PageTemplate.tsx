import React from "react";
import Sidebar from "../components/Sidebar";
import * as style from "../styles/template.module.css";

interface PageTemplateProps {
	children: React.ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className={style.page}>
      <Sidebar />
      <main className={style.content}>
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;
