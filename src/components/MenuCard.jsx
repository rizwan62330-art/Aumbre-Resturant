import * as _ from "react";
function MenuCard({ item: e }) {
  return (
    <div className="menu_card">
      {e.recommended && (
        <span className="menu_card_badge">{"Chef's Pick"}</span>
      )}
      <img src={e.image} alt={e.name} />
      <div className="menu_card_body">
        <h3>{e.name}</h3>
        <p className="menu_card_desc">
          {e.category}
          {" · "}
          {e.calories}
          {" cal"}
        </p>
        <p className="menu_card_price">{e.price}</p>
      </div>
    </div>
  );
}
export default MenuCard;
