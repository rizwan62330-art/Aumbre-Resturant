import * as _ from "react";
function usePageTitle(e) {
  _.useEffect(() => {
    document.title = `${e} | Àumbre Restaurant`;
  }, [e]);
}
export default usePageTitle;
