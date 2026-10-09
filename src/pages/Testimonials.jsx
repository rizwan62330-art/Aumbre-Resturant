import * as _ from "react";
import { User as UserIcon } from "lucide-react";
import { testimonials, achievements } from "../data/content";
import usePageTitle from "../hooks/usePageTitle.js";
import PageBanner from "../components/PageBanner.jsx";
function Testimonials() {
  usePageTitle("Testimonials");
  let [e, t] = _.useState(0),
    n = testimonials[e];
  return (
    <div>
      <PageBanner title="Testimonials" subtitle="Home / Testimonials" />
      <div className="testimonials_page">
        <div className="testimonials_preview">
          <p className="testimonials_text">
            {'"'}
            {n.text}
            {'"'}
          </p>
          <div className="testimonials_avatar">
            <UserIcon />
          </div>
          <h4 className="testimonials_name">{n.name}</h4>
          <p className="testimonials_role">{n.role}</p>
          <div className="testimonials_dots">
            {testimonials.map((n, r) => (
              <button
                className={
                  r === e ? "testimonials_dot active" : "testimonials_dot"
                }
                onClick={() => t(r)}
                aria-label={`Show review ${r + 1}`}
                key={n.id ?? r}
              />
            ))}
          </div>
        </div>
        <div className="achievements_strip">
          {achievements.map((e, index) => (
            <div className="achievement_item" key={e.id ?? index}>
              <h3>{e.number}</h3>
              <p>{e.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
