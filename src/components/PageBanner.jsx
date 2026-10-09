import * as _ from "react";
function PageBanner({ title: e, subtitle: t }) {
  return (
    <div className="page_banner">
      <p className="page_banner_subtitle">{t}</p>
      <h1 className="page_banner_title">{e}</h1>
    </div>
  );
}
export default PageBanner;
