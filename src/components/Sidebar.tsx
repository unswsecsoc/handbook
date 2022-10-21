import React, {useState, useEffect} from "react";
import * as style from "../styles/sidebar.module.css";

// Largely adapted from https://www.emgoto.com/react-table-of-contents/

const Sidebar = () => {
  const { headings } = useHeadingsData();
  const [activeId, setActiveId] = useState();
  useIntersectionObserver(setActiveId);
  return (
    <nav className={style.sidebar} aria-label="Table of contents">
      <Headings headings={headings} activeId={activeId} />    </nav>
  );
};

const useHeadingsData = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2")
    );

    setHeadings(headingElements); 
  }, []);

  return { headings };
};

const Headings = ({ headings, activeId }) => (
  <ul className={style.sidebarContent}>
    {headings.map((heading) => (
      <li key={heading.id} className={heading.id === activeId ? style.active : ""}>
        <a href={`#${heading.id}`}>{heading.innerText}</a>
      </li>
    ))}
  </ul>
);

const useIntersectionObserver = (setActiveId) => {
  useEffect(() => {
    const callback = (entries, observer) => {
      // find the first header element preceding the intersection
      let currentElement = entries[0].target;
      while (currentElement.nodeName !== 'H2' && currentElement.nodeName !== 'H1') {
        currentElement = currentElement.previousSibling;
      }
      setActiveId(currentElement.id);
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-49% 0px -49% 0px',
    });

    // select all header elements and their siblings
    // assumes h1 is the first header element
    let targets = [];
    let sibling = document.querySelector("h1");
    while (sibling) {
      if (sibling.nodeType === 1) {
        targets.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    targets.forEach((element) => observer.observe(element));
  }, []);
};

export default Sidebar;
