import * as _ from "react";
import usePageTitle from "../hooks/usePageTitle.js";
function Reservation() {
  usePageTitle("Reservation");
  let [e, t] = _.useState({
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
    }),
    [n, r] = _.useState(!1),
    i = (n) => {
      t({
        ...e,
        [n.target.name]: n.target.value,
      });
    };
    const today = new Date().toISOString().split("T")[0];
  return (
    <section className="reservation_hero">
      <div className="reservation_hero_left">
        <h1>{"Reserve Your Table for a Night by the Fire"}</h1>
        <p>
          {
            "Book ahead and settle into an evening of smoke-kissed dishes, slow-cooked spice, and warm firelight — a table set for lingering."
          }
        </p>
      </div>
      <div className="reservation_card">
        {n ? (
          <p className="reservation_success">
            {"Thank you, "}
            {e.name || "guest"}
            {"! Your table for"} {e.guests}
            {" on "}
            {e.date}
            {" has been requested."}
          </p>
        ) : (
          <form
            className="reservation_form"
            onSubmit={(e) => {
              (e.preventDefault(), r(!0));
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={e.name}
              onChange={i}
              required={!0}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={e.email}
              onChange={i}
              required={!0}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={e.phone}
              onChange={i}
              required={!0}
            />
            
            <input
              type="date"
              name="date"
              placeholder="Select Date & Time"
              value={e.date}
              onChange={i}
              required={!0}
              min={today}
            />
            <input
              type="text"
              name="guests"
              placeholder="Number of Guests"
              value={e.guests}
              onChange={i}
              required={!0}
            />
            <button type="submit" className="reservation_btn">
              {"make reservation"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
export default Reservation;
