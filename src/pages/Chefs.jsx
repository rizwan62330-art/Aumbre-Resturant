import * as _ from "react";
import { chefs } from "../data/content";
import usePageTitle from "../hooks/usePageTitle.js";
import PageBanner from "../components/PageBanner.jsx";
import ChefCard from "../components/ChefCard.jsx";
function Chefs() {
  return (
    usePageTitle("Our Chefs"),
    (
      <div>
        <PageBanner title="Our Chefs" subtitle="Home / Chefs" />
        <div className="chefs_page">
          <div className="chefs_grid">
            {chefs.map((e, index) => (
              <ChefCard chef={e} key={e.id ?? index} />
            ))}
          </div>
        </div>
      </div>
    )
  );
}
export default Chefs;
