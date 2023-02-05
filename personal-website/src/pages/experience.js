// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import ContentLayout from "../components/contentLayout";
import NavBar from "../components/navBar";

// Step 2: Define your component
const ExperiencePage = () => {
  return (
    <ContentLayout>
      <NavBar />
      <main>
        <h1>Work Experience</h1>
        <h2>Front-End Developer Intern @ Zebra Technologies (2021-2022)</h2>
        <p>
          I did a one-year internship at Zebra Technologies, in London, working
          as a Front-end developer. I was tasked with developing the user
          interface for several mobile products using the Flutter framework,
          including a UI component library. This required collaborating not only
          with my teammates, but also with other teams across the company,
          including the UX team. You can check the projects I worked on{" "}
          <Link to="/projects">here</Link>.
        </p>
        <p>
          During my time at Zebra I mainly focused on building accessibility. I
          took responsibility for most accessibility-related tasks, including
          ensuring full compatibility with native accessibility services,
          auditing the applications to find any outstanding issues, and creating
          responsive apps that worked on devices of all sizes. Towards the end
          of my internship, I also gave a presentation teaching other company
          developers the basics of accessibility and how to create accessible
          apps with Flutter.
        </p>
        {/* TODO: Add app screenshot carousel and link to projects above*/}
      </main>
    </ContentLayout>
  );
};

export const Head = () => (
  <title>Work Experience | Martín Cuesta Allende</title>
);

// Step 3: Export your component
export default ExperiencePage;
