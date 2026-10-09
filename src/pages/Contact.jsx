import * as _ from "react";
import {
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Clock as ClockIcon,
} from "lucide-react";
import usePageTitle from "../hooks/usePageTitle.js";
import PageBanner from "../components/PageBanner.jsx";
function Contact() {
  usePageTitle("Contact Us");
  let [e, t] = _.useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    }),
    [n, r] = _.useState(!1),
    i = (n) => {
      t({
        ...e,
        [n.target.name]: n.target.value,
      });
    };
  return (
    <div>
      <PageBanner title="Contact Us" subtitle="Home / Contact" />
      <div className="contact_page">
        <div className="contact_info">
          <div className="contact_info_item">
            <MapPinIcon />
            <div>
              <h4>{"Location"}</h4>
              <p>{"F-7 Markaz, Islamabad, Pakistan"}</p>
            </div>
          </div>
          <div className="contact_info_item">
            <PhoneIcon />
            <div>
              <h4>{"Phone"}</h4>
              <p>{"+92 300 1234567"}</p>
            </div>
          </div>
          <div className="contact_info_item">
            <MailIcon />
            <div>
              <h4>{"Email"}</h4>
              <p>{"hello@aumbre.com"}</p>
            </div>
          </div>
          <div className="contact_info_item">
            <ClockIcon />
            <div>
              <h4>{"Hours"}</h4>
              <p>
                {"Mon–Fri: 12PM–11PM"}
                <br />
                {"Sat–Sun: 11AM–12AM"}
              </p>
            </div>
          </div>
        </div>
        <div className="contact_form_wrapper">
          {n ? (
            <p className="contact_success">
              {"Thank you, "}
              {e.name || "friend"}
              {"! We've received your message and will get back to you soon."}
            </p>
          ) : (
            <form
              className="contact_form"
              onSubmit={(e) => {
                (e.preventDefault(), r(!0));
              }}
            >
              <div className="contact_row">
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
                  placeholder="Your Email"
                  value={e.email}
                  onChange={i}
                  required={!0}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={e.subject}
                onChange={i}
                required={!0}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={e.message}
                onChange={i}
                required={!0}
              />
              <button type="submit" className="contact_btn">
                {"Send message"}
              </button>
            </form>
          )}
        </div>
        <div className="contact_map_placeholder" />
      </div>
    </div>
  );
}
export default Contact;
