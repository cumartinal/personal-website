// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SocialMediaBanner from "../components/socialMediaBanner";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi, I'm Martín!</h1>
      <h2>
        I'm a 4th Year MEng Computer Science (Human Computer Interaction)
        student at The University of Manchester, UK
      </h2>
      <p>
        <Link to="/about">About me</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Work Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/cv">CV</Link>
      </p>
      <p>
        I'm currently rebuilding this website. In the meantime, why not take a
        look at my CV? You can also add me on LinkedIn or email me at
        cumartinal@gmail.com.
      </p>
      <SocialMediaBanner />
    </Layout>
  );
};

export const Head = () => (
  <title>Martín Cuesta Allende's personal website</title>
);

export default IndexPage;
