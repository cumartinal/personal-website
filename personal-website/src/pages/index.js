// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import SocialMediaBanner from "../components/socialMediaBanner";
import IndexNav from "../components/indexNav";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi, I'm Martín!</h1>
      <h2>
        I'm a 4th Year MEng Computer Science (Human Computer Interaction)
        student at The University of Manchester, UK
      </h2>
      <IndexNav />
      <SocialMediaBanner />
    </Layout>
  );
};

export const Head = () => (
  <title>Martín Cuesta Allende's personal website</title>
);

export default IndexPage;
