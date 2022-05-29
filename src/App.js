import "./styles/global/app.scss";

import AnotherCssCard from "./components/css/AnotherCssCard.js";
import AnotherCssModuleCard from "./components/css_modules/AnotherCssModuleCard";
import CssCard from "./components/css/CssCard.js";
import CssModuleCard from "./components/css_modules/CssModuleCard";

function App() {
  return (
    <>
      <CssCard />
      <AnotherCssCard />
      <CssModuleCard />
      <AnotherCssModuleCard />
    </>
  );
}

export default App;
