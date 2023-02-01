import * as React from "react";
import { Link } from "gatsby";
import { indexNav, indexNavUl, indexNavLi } from "./indexNav.module.css";

const IndexNav = () => {
  return (
    <div class={indexNav}>
      <ul class={indexNavUl}>
        <li class={indexNavLi}>
          <Link to="/about">About me</Link>
        </li>
        <li className={indexNavLi}>
          <Link to="/education">Education</Link>
        </li>
        <li class={indexNavLi}>
          <Link to="/experience">Work Experience</Link>
        </li>
        <li class={indexNavLi}>
          <Link to="/projects">Projects</Link>
        </li>
        <li class={indexNavLi}>
          <Link to="/cv">CV</Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexNav;
