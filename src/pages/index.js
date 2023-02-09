// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import IndexLayout from "../components/indexLayout";
import SocialMediaBanner from "../components/socialMediaBanner";
import IndexNav from "../components/indexNav";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <IndexLayout>
        <div class="box">
          <div class="IntroTextBox">
            <h1>Hi, I'm Martín!</h1>
            <h2>
              I'm a 4th Year MEng Computer Science (Human Computer Interaction)
              student at The University of Manchester, UK
            </h2>
          </div>
          <div class="IndexNavBox">
            <IndexNav />
          </div>
        </div>
        <SocialMediaBanner />
        <div style={{ height: 25 }}></div>{" "}
        {/* TODO: Find a better way to do this end spacing...*/}
      </IndexLayout>
    </Layout>
  );
};

export const Head = () => (
  <title>Martín Cuesta Allende's personal website</title>
);

export default IndexPage;
