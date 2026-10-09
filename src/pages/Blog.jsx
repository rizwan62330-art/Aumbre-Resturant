import * as _ from "react";
import { blogPosts } from "../data/content";
import usePageTitle from "../hooks/usePageTitle.js";
import PageBanner from "../components/PageBanner.jsx";
function Blog() {
  return (
    usePageTitle("Blog"),
    (
      <div>
        <PageBanner title="Blog" subtitle="Home / Blog" />
        <div className="blog_page">
          <div className="blog_grid">
            {blogPosts.map((e, index) => (
              <div className="blog_card" key={e.id ?? index}>
                <img src={e.image} alt={e.title} />
                <div className="blog_card_body">
                  <span className="blog_card_category">{e.category}</span>
                  <h3>{e.title}</h3>
                  <p>{e.excerpt}</p>
                  <span className="blog_card_date">{e.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
export default Blog;
