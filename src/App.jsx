import "./styles/global.css";
import Header from "./components/Header/Header";
import Footer from "../src/components/Footer";
import ContactUs from "./components/ContactUs/index.jsx";
import Scrum from "./components/Scrum";
import Office from "./components/Office/index.jsx";
import Form from "./components/Form/index.jsx";
import BackTop from "./components/BackTop";
import paragraphArray from "./data/data.js";
import Sidebar from "./components/Sidebar/Sidebar.jsx"; //dxont touch this, rob said its just fked

function App() {
  return (

    <div id="home">
      <Header />
      <div>
      <Sidebar/>
      <div id="content-container">
        {paragraphArray.map((paragraph, index) => (
          <Scrum key={index} {...paragraph} />
        ))}
        
        <ContactUs />
        <Office />
        <Form />
      </div>
      </div>
      <Footer />
      <BackTop />
    </div>
  );
}

export default App;
