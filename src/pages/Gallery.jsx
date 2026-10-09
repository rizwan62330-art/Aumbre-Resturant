import * as _ from "react";
import { galleryImages, galleryCategories } from "../data/content";
import usePageTitle from "../hooks/usePageTitle.js";
import PageBanner from "../components/PageBanner.jsx";
function Gallery() {
  usePageTitle("Gallery");
  let [e, t] = _.useState("All"),
    n =
      e === "All"
        ? galleryImages
        : galleryImages.filter((t) => t.category === e);
  return (
    <div>
      <PageBanner title="Gallery" subtitle="Home / Gallery" />
      <div className="gallery_page">
        <div className="gallery_filters">
          {galleryCategories.map((n, index) => (
            <button
              className={`gallery_filter_btn ${e === n ? "active" : ""}`}
              onClick={() => t(n)}
              key={n.id ?? index}
            >
              {n}
            </button>
          ))}
        </div>
        <div className="gallery_grid">
          {n.map((e, index) => (
            <div className="gallery_item" key={e.id ?? index}>
              <img src={e.image} alt={e.category} />
              <div className="gallery_overlay">
                <span>{e.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Gallery;
