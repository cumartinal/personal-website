// Step 1: Import React
import * as React from "react";
import loadable from "@loadable/component";
import ContentLayout from "../components/contentLayout";
import NavBar from "../components/navBar";
import SocialMediaBanner from "../components/socialMediaBanner";

const FoodGallery = loadable(() => import("../components/foodGallery"), {
  ssr: false,
});

export const Head = () => <title>About Me | Martín Cuesta Allende</title>;

// Step 2: Define your component
export default function AboutPage() {
  return (
    <ContentLayout>
      <NavBar />
      <main>
        <h1>About Me</h1>
        <p>
          I’m a 4th Year MEng student at the University of Manchester doing a
          Computer Science (Human Computer Interaction) degree. My academic and
          professional interests include accessibility, user experience and
          anything related to working with data. I have also done an internship
          at Zebra Technologies, developing accessible and responsive front-end
          user interfaces with Flutter.
        </p>
        <p>
          I’m currently seeking graduate opportunities in London, so if you want
          to know more about my work experience and projects, please check the
          rest of this website. And, if you think I’m a good fit for something,
          why not reach out to me on{" "}
          <a
            href="https://www.linkedin.com/in/cumartinal/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          or email me at{" "}
          <a href="mailto:cumartinal@gmail.com">cumartinal@gmail.com</a>?
        </p>
        <p>Also, I do stuff outside of university and work 👇!</p>
        <h2>Non-professional stuff</h2>
        <p>
          I was born in Spain, moved to France when I was 13 and then once again
          to the UK for university. This has given me the opportunity to learn
          multiple languages, being completely fluent in English, Spanish and
          French, and having a beginner level in German and Italian. I’m also
          currently teaching myself Mandarin.
        </p>
        <p>
          Also, I like cooking 🍳! A lot! I don't really have a preferred style,
          but I rather try to explore different cuisines and methods of cooking
          (think 🥘🍜🍪🌯🍝...). I’m currently doing a personal project where I
          make one characteristic dish from each country. Right now, I’m
          planning Bolivia’s dish, but check out some of the things I’ve cooked
          below!
        </p>
        <FoodGallery />
        <SocialMediaBanner />
      </main>
    </ContentLayout>
  );
}
