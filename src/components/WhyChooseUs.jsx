import * as _ from "react";
import { restaurantBenefits } from "../data/content";
function WhyChooseUs() {
  return (
    <section className="why_choose_us_section">
      <h2 className="why_choose_us_heading">{"Why People Choose Us?"}</h2>
      <p className="why_choose_us_subtitle">
        {
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quod omnis fugiat deleniti ipsam soluta, illo necessitatibus officia et natus voluptatum assumenda repellendus nobis dolores delectus totam dignissimos tempora enim."
        }
      </p>
      <div className="why_choose_us_bg">
        <div className="why_choose_us_card">
          {restaurantBenefits.map((e, index) => (
            <div className="why_choose_us_item" key={e.id ?? index}>
              <img className="why_choose_us_icon" src={e.icon} alt={e.title} />
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhyChooseUs;
