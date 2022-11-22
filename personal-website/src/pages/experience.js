// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";

// Step 2: Define your component
const ExperiencePage = () => {
  return (
    <main>
      <h1>Work Experience</h1>
      <Link to="/">Back to Home</Link>
      <p>
        I’m a 4th Year MEng student at the University of Manchester doing a
        Computer Science (Human Computer Interaction) degree. My academic and
      </p>
    </main>
  );
};

export const Head = () => (
  <title>Work Experience | Martín Cuesta Allende</title>
);

// Step 3: Export your component
export default ExperiencePage;
