import * as React from "react";
import ContentLayout from "../components/contentLayout";
import NavBar from "../components/navBar";
import SocialMediaBanner from "../components/socialMediaBanner";

export const Head = () => <title>Education | Martín Cuesta Allende</title>;

export default function EducationPage() {
  return (
    <ContentLayout>
      <NavBar />
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
        <p>
          <b>Current GPA</b>: 79% (First Class)
        </p>
        <table>
          <tr>
            <td>
              <b>Year 4</b>
            </td>
            <td>
              Industrial Project Report
              <br />
              Modelling Data on the Web
              <br />
              Querying Data on the Web
              <br />
              Data Engineering
              <br />
              Principles of Digital Biology
              <br />
              Introduction to Health Informatics
              <br />
              Decision Behaviour
              <br />
              Business Feasibility Study
            </td>
          </tr>
          <tr>
            <td>
              <b>Year 3</b>
            </td>
            <td>
              Third Year Project
              <br />
              User Experience
              <br />
              Cognitive Robotics
              <br />
              Anthropology of Vision, Senses, Memory
              <br />
              Advanced Social Network Analysis
              <br />
              Enterprise Management for CS
              <br />
              Managing Finance in Enterprise
            </td>
          </tr>
          <tr>
            <td>
              <b>Year 2</b>
            </td>
            <td>
              Software Engineering I, II
              <br />
              Fundamentals of Databases
              <br />
              Computer Graphics
              <br />
              Distributed Computing
              <br />
              Statistics and Data Analysis
              <br />
              Essentials of Survey Design
              <br />
              Motor Systems for HCI
              <br />
              Sensory Systems for HCI
              <br />
              Perception and Action
              <br />
              Cognitive Neuroscience
              <br />
              Cognition
            </td>
          </tr>
          <tr>
            <td>
              <b>Year 1</b>
            </td>
            <td>
              First Year Team Project
              <br />
              Fundamentals of Computer Architecture
              <br />
              Object Oriented Programming with Java I, II
              <br />
              Fundamentals of Distributed Systems
              <br />
              Research Methods & Statistics
              <br />
              Introduction to Cognition
              <br />
              Brain & Behaviour
              <br />
              Sensation & Perception
              <br />
              Perception and Action
              <br />
              Excitable Cells
            </td>
          </tr>
        </table>
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
        <SocialMediaBanner />
      </main>
    </ContentLayout>
  );
}
