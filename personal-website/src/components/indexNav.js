import * as React from "react";
import { Link } from "gatsby";
import {
  indexNav,
  indexNavUl,
  indexNavLi,
  indexNavA,
} from "./indexNav.module.css";

const IndexNav = () => {
  return (
    <div class={indexNav}>
      <ul class={indexNavUl}>
        <li class={indexNavLi}>
          <Link to="/about" class={indexNavA}>
            About me
          </Link>
        </li>
        <li className={indexNavLi}>
          <Link to="/education" class={indexNavA}>
            Education
          </Link>
        </li>
        <li class={indexNavLi}>
          <Link to="/experience" class={indexNavA}>
            Work Experience
          </Link>
        </li>
        <li class={indexNavLi}>
          <Link to="/projects" class={indexNavA}>
            Projects
          </Link>
        </li>
        <li class={indexNavLi}>
          <Link to="/cv" class={indexNavA}>
            CV
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexNav;
