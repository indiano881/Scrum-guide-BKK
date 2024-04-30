import "./styles/global.css";
import { getImageURL } from "../utils/functions.js";
import ContactUs from "./components/ContactUs/index.jsx";

function App() {
  return (
    <>
      <h1>hello world</h1>
      {/* testing img functions*/}
      <img src={getImageURL("logo.png")} alt="" />
      <ContactUs />
    </>
  );
}

export default App;
