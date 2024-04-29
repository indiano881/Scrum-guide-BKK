import "./styles/global.css";
import Header from "./components/Header/Header";
import { getImageURL } from "../utils/functions.js";
import Footer from "../src/components/Footer";
import ContactUs from "./components/ContactUs/index.jsx";
import Scrum from "./components/Scrum"
import paragraphArray from "./data/data.js";

function App() {
  return (
    <>
      <Header />
      <h1>hello world</h1>
      {/* testing img functions*/}
      <img src={getImageURL("logo.png")} alt="" />
      <h1>hello world</h1>
      <Footer />
      <ContactUs />
      {paragraphArray.map((paragraph, index)=> <Scrum  key={index} {...paragraph}/>)}

    </>
  );
}

export default App;
