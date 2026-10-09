import * as _ from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../data/content";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="footer_col">
          <h3 className="footer_logo">{"Àumbre"}</h3>
          <p>
            {
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, praesentium recusandae nihil laborum quidem inventore pariatur excepturi maxime."
            }
          </p>
        </div>
        <div className="footer_col">
          <h4>{"explore"}</h4>
          <ul>
            <li>
              <Link to="/">{"Home"}</Link>
            </li>
            <li>
              <Link to="/about">{"About"}</Link>
            </li>
            <li>
              <Link to="/menu">{"Menu"}</Link>
            </li>
            <li>
              <Link to="/chefs">{"Chefs"}</Link>
            </li>
            <li>
              <Link to="/gallery">{"Gallery"}</Link>
            </li>
          </ul>
        </div>
        <div className="footer_col">
          <h4>{"more"}</h4>
          <ul>
            <li>
              <Link to="/testimonials">{"Testimonials"}</Link>
            </li>
            <li>
              <Link to="/blog">{"Blog"}</Link>
            </li>
            <li>
              <Link to="/faq">{"FAQ"}</Link>
            </li>
            <li>
              <Link to="/reservation">{"Reservation"}</Link>
            </li>
            <li>
              <Link to="/contact">{"Contact"}</Link>
            </li>
          </ul>
        </div>
        <div className="footer_col">
          <h4>{"Contact"}</h4>
          <p>{"F-7 Markaz, Islamabad, Pakistan"}</p>
          <p>{"+92 300 1234567"}</p>
          <p>{"hello@aumbre.com"}</p>
        </div>
      </div>
      <div className="footer_bottom">
        <p>
          {"© "}
          {new Date().getFullYear()}
          {" Àumbre. All rights reserved."}
        </p>
        <div className="footer_socials">
          <a href="#">
            <hr />
          </a>
          <a href="#">
            <mr />
          </a>
          <a href="#">
            <fr />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
