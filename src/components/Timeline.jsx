import * as _ from "react";
import { restaurantTimeline } from "../data/content";
function Timeline() {
  return (
    <section className="timeline_section">
      <h2 className="timeline_heading">{"Our journey"}</h2>
      <div className="timeline_track">
        {restaurantTimeline.map((e, index) => (
          <div className="timeline_item" key={e.id ?? index}>
            <div className="timeline_dot" />
            <h3>{e.year}</h3>
            <p>{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Timeline;
