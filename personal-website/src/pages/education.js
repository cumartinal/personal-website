// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// Step 2: Define your component
const EducationPage = () => {
  return (
    <Layout>
      <main>
        <h1>Education</h1>
        <h2>
          MEng Computer Science (Human Computer Interaction) @ The University of
          Manchester (2018-2023)
        </h2>
        <p>
          I’m currently in my 4th and final year of my MEng Computer Science
          (Human Computer Interaction) degree at{" "}
          <a
            href="https://www.manchester.ac.uk/"
            target="_blank"
            rel="noreferrer"
          >
            The University of Manchester
          </a>
          . Not only have I learned a lot about Computer Science here, but
          course units in Statistics, Psychology, Biology and Anthropology have
          given me wide, interdisciplinary knowledge.
        </p>
        <p>
          My Third Year Project consisted of designing and developing LabelScan,
          an accessibility app for people with dyslexia and visual impairments
          that scans nutrition labels and presents them in a more accessible
          manner.
        </p>
        {/* TODO: Add courses table */}
        <h2>
          International Option of the French Baccalaureate @ Cité Scolaire
          Internationale de Lyon (2018)
        </h2>
        <p>
          I completed my high school studies in 2018, graduating with highest
          honours (17.12/20, Mention Très Bien). The International Option of the
          French Baccalaureate consisted of the same material as the regular
          French Scientific Baccalaureate, with additional course units taught
          in a foreign language at native level, in my case English. As I was
          part of the{" "}
          <a href="https://www.csianglo.org/" target="_blank" rel="noreferrer">
            American Section at CSI Lyon
          </a>
          , 30% of my mark consisted of Modern American History, English
          Literature, and American Geography and Geopolitics.
        </p>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Education | Martín Cuesta Allende</title>;

// Step 3: Export your component
export default EducationPage;
