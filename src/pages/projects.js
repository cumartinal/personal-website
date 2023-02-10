import * as React from "react";
import report from "../documents/3rdYearReport.pdf";
import ContentLayout from "../components/contentLayout";
import NavBar from "../components/navBar";
import SocialMediaBanner from "../components/socialMediaBanner";
import Carousel from "../components/carouselBase";

// Import images
import QNoteInbox from "../images/Zebra/QNoteInbox.png";
import QChatReact from "../images/Zebra/QChatReact.png";
import QChatFavourite from "../images/Zebra/QChatFavourite.png";
import FlutterUILibrary from "../images/Zebra/FlutterUILibrary.png";
import UILibraryCalendar from "../images/Zebra/UILibraryCalendar.png";
import UILibraryRandomColour from "../images/Zebra/UILibraryRandomColour.png";
import UILibraryStats from "../images/Zebra/UILibraryStats.png";
import LabelScanScan from "../images/LabelScan/LabelScanScan.png";
import LabelScanTable from "../images/LabelScan/LabelScanTable.png";
import LabelScanGraph from "../images/LabelScan/LabelScanGraph.png";
import LabelScanTableNight from "../images/LabelScan/LabelScanTableNight.png";
import LabelScanGraphNight from "../images/LabelScan/LabelScanGraphNight.png";

export const Head = () => <title>Projects | Martín Cuesta Allende</title>;

export default function ProjectsPage() {
  return (
    <ContentLayout>
      <NavBar />
      <main>
        <h1>Projects</h1>
        <h2>Q-Suite @ Zebra Technologies</h2>
        <div class="flexBox">
          <div class="textFlexBox">
            <p>
              Q-Suite is a set of mobile applications for the enterprise,
              facilitating communication between employees and other
              work-related tasks. I was part of the team developing the user
              interface, written entirely in Dart and Flutter. Collaborating
              with the UX team, we created a responsive, robust and modern
              front-end
            </p>
            <p>
              Accessibility was a focus point in this project, making the
              applications fully ADA compliant. I took responsibility for most
              accessibility-related tasks, including ensuring full compatibility
              with native accessibility services, auditing the applications to
              find any outstanding issues, and creating responsive apps that
              worked on devices of all sizes.
            </p>
          </div>
          <div class="carouselFlexBox">
            <Carousel
              naturalSlideWidth={1170}
              naturalSlideHeight={2532}
              imgs={[QNoteInbox, QChatFavourite, QChatReact]}
              alts={[
                "QNote inbox screenshot",
                "QChat favourite contacts screenshot",
                "QChat chat screen screenshot",
              ]}
            />
          </div>
        </div>
        <h2>Flutter UI Component Library @ Zebra Technologies</h2>
        <div class="flexBox">
          <div class="textFlexBox">
            <p>
              A parallel project to Q-Suite, this consisted of developing a
              mobile-first user component library in Flutter, meant to increase
              consistency across apps and reduce development time. Aside from
              developing the components themselves, I also wrote most of the
              documentation, including best practices, and ensured the
              components were as accessible as possible.
            </p>
          </div>
          <div class="carouselFlexBox">
            <Carousel
              naturalSlideWidth={1170}
              naturalSlideHeight={2532}
              imgs={[
                UILibraryStats,
                FlutterUILibrary,
                UILibraryRandomColour,
                UILibraryCalendar,
              ]}
              alts={[
                "Flutter UI Library statistics card screenshot",
                "Flutter UI Library buttons screenshot",
                "Flutter UI Library random colour utility screenshot",
                "Flutter UI Library calendar screenshot",
              ]}
            />
          </div>
        </div>
        <h2>LabelScan @ The University of Manchester</h2>
        <div class="flexBox">
          <div class="textFlexBox">
            <p>
              My Third Year Project at The University of Manchester was
              LabelScan, an Android app meant to make nutrition labels
              accessible to people with dyslexia and visual impairments.
            </p>
            <p>
              Nutrition labels contain very important information about the
              foods we consume, especially for people with dietary restrictions,
              but their design leaves behind those with dyslexia and visual
              impairments. No nutrition label standard aims to make information
              accessible to them, and none leverage digital technology to
              enhance their accessibility. LabelScan attempted to bridge this
              gap, making the information of nutrition labels accessible.
            </p>
          </div>
          <div class="carouselFlexBox">
            <Carousel
              naturalSlideWidth={1080}
              naturalSlideHeight={2214}
              imgs={[
                LabelScanScan,
                LabelScanTable,
                LabelScanGraph,
                LabelScanTableNight,
                LabelScanGraphNight,
              ]}
              alts={[
                "LabelScan screenshot, scanning a nutritional label",
                "LabelScan screenshot, table presentation of nutrition info",
                "LabelScan screenshot, graph presentation of nutrition info",
                "LabelScan screenshot, table presentation of nutrition info, night mode",
                "LabelScan screenshot, graph presentation of nutrition info, night mode",
              ]}
            />
          </div>
        </div>
        <p>
          Using Google’s ML Kit, the app scanned the nutrition label, extracted
          its text, parsed the information within and presented it back to the
          user in an accessible manner, presenting it visually rather than
          textually. Full compatibility with Talkback ensured the information
          was accessible to everyone.
        </p>
        <p>
          You can check out the project’s source code{" "}
          <a
            href="https://github.com/cumartinal/labelscan/releases/tag/v1.0.0"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            here
          </a>
          , and the written project report{" "}
          <a href={report} target="_blank" rel="noreferrer">
            here
          </a>
          .
        </p>
        <SocialMediaBanner />
      </main>
    </ContentLayout>
  );
}
