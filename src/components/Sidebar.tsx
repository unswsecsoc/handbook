import React from "react";
import * as style from "../styles/sidebar.module.css";

const Sidebar = () => {
	return (
		<nav className={style.sidebar} aria-label="Table of contents">
            <ul>
                <li>Topic 1</li>
                <li>Topic 2</li>
                <li>Topic 3
                    <ul>
                        <li>First heading</li>
                        <li>Second heading</li>
                        <li>Threeth heading</li>
                        <li>Fourrd heading</li>
                        <li>Heading V</li>
                        <li>Heading 6</li>
                    </ul>
                </li>
            </ul>
        </nav>
	);
};

export default Sidebar;
