import * as React from "react";
import { Link } from "gatsby";
import { indexNav, IndexNavUl } from "./indexNav.module.css";

const IndexNav = () => {
  return (
    <div class={indexNav}>
      <ul class={IndexNavUl}>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/experience">Work Experience</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
      </ul>
      <p></p>
    </div>
  );
};

export default IndexNav;
