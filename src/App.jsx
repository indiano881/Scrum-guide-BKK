import "./styles/global.css";
import Scrum from "./components/Scrum";
import paragraphArray from "./data/data.js";
import Office from "./components/Office/index.jsx";
import ContactUs from "./components/ContactUs/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/Header";
import Form from "./components/Form/index.jsx";
import BackTop from "./components/BackTop";

function App() {
  return (
    <div id="home">
      <Header />
      <div id="content-container">
        {paragraphArray.map((paragraph, index) => (
          <Scrum key={index} {...paragraph} />
        ))}

        <ContactUs />
        <Office />
        <Form />
      </div>
      <Footer />
      <BackTop />
    </div>
  );
}

export default App;
