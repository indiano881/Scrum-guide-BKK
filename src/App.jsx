import { getImageURL } from "../utils/functions.js";
<<<<<<< HEAD
=======
import Footer from "../src/components/Footer";
import ContactUs from "./components/ContactUs/index.jsx";
>>>>>>> f9ce240 (added id to link in header)
import Scrum from "./components/Scrum";
import paragraphArray from "./data/data.js";
import Office from "./components/Office/index.jsx";
import ContactUs from "./components/ContactUs/index.jsx";
import Footer from "../src/components/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div id="home">
      <Header />
      {paragraphArray.map((paragraph, index) => (
        <Scrum key={index} {...paragraph} />
      ))}
<<<<<<< HEAD

      <ContactUs />
      <Office />
      <Footer />
    </>
=======
      <ContactUs />
      <Footer />
    </div>
>>>>>>> f9ce240 (added id to link in header)
  );
}

export default App;
