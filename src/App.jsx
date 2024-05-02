import { getImageURL } from "../utils/functions.js";
import Scrum from "./components/Scrum"
import paragraphArray from "./data/data.js";
import Office from "./components/Office/index.jsx";
import ContactUs from "./components/ContactUs/index.jsx";
import Footer from "../src/components/Footer"

function App() {
  return (
    <>
     <h1>hello world</h1>
      <h1>hello world</h1>
      {/* testing img functions*/}
      <img src={getImageURL("logo.png")} alt="" />
      {paragraphArray.map((paragraph, index)=> <Scrum  key={index} {...paragraph}/>)}

      <ContactUs />
      <Office />
      <Footer/>
    </>
  );
}

export default App;
