import * as _ from "react";
import { Link } from "react-router-dom";
import { featuredDishes } from "../data/content";
function FeaturedMenu() {
  return (
    <section className="featured_menu_section">
      <p className="featured_menu_eyebrow">{"Carnivore Tasty Offer"}</p>
      <h2 className="featured_menu_heading">
        <span className="featured_menu_flourish">{"........"}</span>
        {"Our Menu"}
        <span className="featured_menu_flourish">{"........"}</span>
      </h2>
      <div className="featured_menu_grid">
        {featuredDishes.map((e, index) => (
          <div className="featured_menu_card" key={e.id ?? index}>
            <img src={e.image} alt={e.name} />
            <h3>{e.name}</h3>
            <Link to="/menu" className="featured_menu_btn">
              {"read more"}
            </Link>
          </div>
        ))}
      </div>
      <p className="featured_menu_description">
        {
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae inventore voluptatibus iure error itaque numquam necessitatibus autem tempore optio. Dolores voluptate consectetur quidem voluptas labore delectus eligendi reprehenderit earum quaerat?"
        }
      </p>
    </section>
  );
}
export default FeaturedMenu;
