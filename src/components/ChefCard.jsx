import * as _ from "react";
function ChefCard({ chef: e }) {
  return (
    <div className="chef_card">
      <img src={e.image} alt={e.name} className="chef_card_image" />
      <div className="chef_card_body">
        <h3>{e.name}</h3>
        <p className="chef_card_position">{e.position}</p>
        <p className="chef_card_meta">
          {e.experience}
          {" · "}
          {e.specialty}
        </p>
        <p className="chef_card_bio">{e.bio}</p>
        <div className="chef_card_socials">
          <a href="#">
            <hr />
          </a>
          <a href="#">
            <mr />
          </a>
          <a href="#">
            <pr />
          </a>
        </div>
      </div>
    </div>
  );
}
export default ChefCard;
