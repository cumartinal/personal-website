import * as React from "react";
import { Link } from "gatsby";
import ContentLayout from "../components/contentLayout";
import NavBar from "../components/navBar";
import SocialMediaBanner from "../components/socialMediaBanner";
import Carousel from "../components/carouselBase";

// Import images
import DemoDay from "../images/Faculty/Presentation.jpg";
import Audience from "../images/Faculty/Audience.jpg";
import No10 from "../images/Faculty/No10.jpg";

export const Head = () => <title>Education | Martín Cuesta Allende</title>;

export default function EducationPage() {
  return (
    <ContentLayout>
      <NavBar />
      <main>
        <h1>Education</h1>
        <h2>Data Science Fellow @ Faculty (May - June 2023)</h2>
        <p>
          I completed a highly competitive and intensive data science fellowship
          at{" "}
          <a href="https://faculty.ai/" target="_blank" rel="noreferrer">
            Faculty
          </a>
          , one of Europe's leading AI companies. During those 8 weeks, I
          covered many technical topics related to data science and AI, like
          NLP, Time Series Analysis, Neural Networks and more. Commercial topics
          were also covered, including presentations, managing data science
          projects, GDPR and effective business communication.
        </p>
        <p>
          This fellowship was culminated by Demo Day, in which I presented my
          individually managed project with host company{" "}
          <a href="https://www.uk-cpi.com/" target="_blank" rel="noreferrer">
            CPI
          </a>{" "}
          to an audience of over 100 guests. You can read more about the project
          in the <Link to="/projects">Projects</Link> page.
        </p>
        <div class="carouselFlexBox">
          <Carousel
            naturalSlideWidth={6016}
            naturalSlideHeight={4016}
            maxWidth="800px"
            imgs={[DemoDay, Audience, No10]}
            alts={[
              "Demo Day presentation",
              "Audience at Demo Day",
              "Visit to 10 Downing Street data science team",
            ]}
          />
        </div>
        <h2>
          MEng Computer Science (Human Computer Interaction) @ The University of
          Manchester (2018-2023)
        </h2>
        <p>
          I graduated with an MEng in Computer Science (Human Computer
          Interaction) at{" "}
          <a
            href="https://www.manchester.ac.uk/"
            target="_blank"
            rel="noreferrer"
          >
            The University of Manchester
          </a>
          . Not only did I learned a lot about Computer Science here, but course
          units in Statistics, Psychology, Biology and Anthropology have given
          me wide, interdisciplinary knowledge.
        </p>
        <p>
          My Third Year Project consisted of designing and developing LabelScan,
          an accessibility app for people with dyslexia and visual impairments
          that scans nutrition labels and presents them in a more accessible
          manner.
        </p>
        <p>
          <b>Degree Classification</b>: First Class
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
