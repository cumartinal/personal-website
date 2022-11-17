// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import HeroNavbar from "../components/heroNavbar";
import SocialMediaBanner from "../components/socialMediaBanner";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <HeroNavbar pageTitle="Home Page">
        <h1>Hi, I'm Martín!</h1>
        <Link to="/about">About</Link>
        <p>
          I'm currently rebuilding this website. In the meantime, why not take a
          look at my CV? You can also add me on LinkedIn or email me at
          cumartinal@gmail.com.
        </p>
      </HeroNavbar>
      <SocialMediaBanner />
    </div>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
