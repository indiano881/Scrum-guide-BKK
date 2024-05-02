import "./styles/global.css";
import Header from "./components/Header/Header";
import { getImageURL } from "../utils/functions.js";
import Footer from "../src/components/Footer";
import ContactUs from "./components/ContactUs/index.jsx";
import Scrum from "./components/Scrum";
import paragraphArray from "./data/data.js";
import Office from "./components/Office/index.jsx";

function App() {
  return (
    <div id="home">
      <Header />
      {paragraphArray.map((paragraph, index) => (
        <Scrum key={index} {...paragraph} />
      ))}

      <ContactUs />
      <Office />
      <Footer />
    </div>
  );
}

export default App;
