import * as _ from "react";
import { Star as StarIcon } from "lucide-react";
import { faqItems } from "../data/content";
import usePageTitle from "../hooks/usePageTitle.js";
import PageBanner from "../components/PageBanner.jsx";
function FAQ() {
  usePageTitle("FAQ");
  let [e, t] = _.useState(null),
    n = (n) => {
      t(e === n ? null : n);
    },
    r = faqItems.slice(0, 8),
    i = faqItems.slice(8),
    a = (t) => (
      <div className="faq_item" key={t.id}>
        <button className="faq_question" onClick={() => n(t.id)}>
          <span>{t.question}</span>
          <StarIcon className={e === t.id ? "faq_icon open" : "faq_icon"} />
        </button>
        {e === t.id && <p className="faq_answer">{t.answer}</p>}
      </div>
    );
  return (
    <div>
      <PageBanner title="FAQ" subtitle="Home / FAQ" />
      <div className="faq_page">
        <div className="faq_column">{r.map(a)}</div>
        <div className="faq_column">{i.map(a)}</div>
      </div>
    </div>
  );
}
export default FAQ;
