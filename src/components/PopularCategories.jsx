import * as _ from "react";
import { popularDishesByCategory, popularCategoryNames } from "../data/content";
function PopularCategories() {
  let [e, t] = _.useState("Main Course"),
    [n, r] = _.useState("right"),
    i = _.useRef(popularCategoryNames.indexOf("Main Course")),
    a = (e) => {
      let n = popularCategoryNames.indexOf(e);
      (r(n > i.current ? "right" : "left"), (i.current = n), t(e));
    };
  return (
    <section className="popular_categories_section">
      <div className="popular_categories_sidebar">
        <p className="popular_categories_eyebrow">{"select your meal"}</p>
        <h2 className="popular_categories_heading">{"Popular Categories"}</h2>
        <div className="popular_categories_buttons">
          {popularCategoryNames.map((t, index) => (
            <button
              className={
                e === t
                  ? "popular_categories_btn active"
                  : "popular_categories_btn"
              }
              onClick={() => a(t)}
              key={t.id ?? index}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="popular_categories_content">
        <h3 className="popular_categories_title">{e}</h3>
        <div
          className={
            n === "right"
              ? "popular_categories_grid slide_right"
              : "popular_categories_grid slide_left"
          }
        >
          {popularDishesByCategory[e].map((e, index) => (
            <div className="popular_categories_card" key={e.id ?? index}>
              <img src={e.image} alt={e.name} />
              <h4>{e.name}</h4>
              <p>{e.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default PopularCategories;
