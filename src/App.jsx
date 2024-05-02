import "./styles/global.css";
import Header from "./components/Header/Header";
import Footer from "../src/components/Footer";
import ContactUs from "./components/ContactUs/index.jsx";
import Scrum from "./components/Scrum";
import Office from "./components/Office/index.jsx";
import Form from "./components/Form/index.jsx";
import paragraphArray from "./data/data.js";

function App() {
  return (
    <>
      <div id="home">
      <Header />
      {paragraphArray.map((paragraph, index) => (
        <Scrum key={index} {...paragraph} />
      ))}
      <ContactUs />
      <Office />
      <Form />
      <Footer />
      </div>
    </>
  );
}

export default App;
