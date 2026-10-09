import * as _ from "react";
import { menuItems, menuCategories } from "../data/content";
import usePageTitle from "../hooks/usePageTitle.js";
import PageBanner from "../components/PageBanner.jsx";
import MenuCard from "../components/MenuCard.jsx";
function Menu() {
  usePageTitle("Menu");
  let [e, t] = _.useState("All"),
    n = e === "All" ? menuItems : menuItems.filter((t) => t.category === e);
  return (
    <div>
      <PageBanner title="Our Menu" subtitle="Home / Menu" />
      <div className="menu_page">
        <div className="menu_filters">
          {menuCategories.map((n, index) => (
            <button
              className={`menu_filter_btn ${e === n ? "active" : ""}`}
              onClick={() => t(n)}
              key={n.id ?? index}
            >
              {n}
            </button>
          ))}
        </div>
        <div className="menu_grid">
          {n.map((e, index) => (
            <MenuCard item={e} key={e.id ?? index} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Menu;
