import * as _ from "react";
import { User as UserIcon } from "lucide-react";
import { homeReviews } from "../data/content";
function ReviewsPreview() {
  let [e, t] = _.useState(0),
    n = homeReviews[e];
  return (
    <section className="reviews_preview_section">
      <h2 className="reviews_preview_heading">{"Customer Reviews"}</h2>
      <p className="reviews_preview_text">{n.text}</p>
      <div className="reviews_preview_avatar">
        <UserIcon />
      </div>
      <h4 className="reviews_preview_name">{n.name}</h4>
      <p className="reviews_preview_role">{n.role}</p>
      <div className="reviews_preview_dots">
        {homeReviews.map((n, r) => (
          <button
            className={
              r === e ? "reviews_preview_dot active" : "reviews_preview_dot"
            }
            onClick={() => t(r)}
            aria-label={`Show review ${r + 1}`}
            key={n.id ?? r}
          />
        ))}
      </div>
    </section>
  );
}
export default ReviewsPreview;
