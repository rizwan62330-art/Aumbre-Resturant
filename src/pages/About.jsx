import * as _ from "react";
import usePageTitle from "../hooks/usePageTitle.js";
import PageBanner from "../components/PageBanner.jsx";
import OurStory from "../components/OurStory.jsx";
import TeamIntro from "../components/TeamIntro.jsx";
import Timeline from "../components/Timeline.jsx";
function About() {
  return (
    usePageTitle("About"),
    (
      <div>
        <PageBanner title="About Us" subtitle="Home / About" />
        <OurStory />
        <TeamIntro />
        <Timeline />
      </div>
    )
  );
}
export default About;
