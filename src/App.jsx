import "./styles/global.css";
import Header from "./components/Header/Header";
import { getImageURL } from "../utils/functions.js";
import Footer from "../src/components/Footer";
import ContactUs from "./components/ContactUs/index.jsx";
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
    </>
  );
}

export default App;
