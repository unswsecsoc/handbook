import React from "react";
import Sidebar from "../components/Sidebar";
import * as style from "../styles/template.module.css";

interface PageTemplateProps {
	children: React.ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className={style.page}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <main className={style.content}>
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;
