import "./styles/global.css";
import Header from "./components/Header/Header";
import { getImageURL } from "../utils/functions.js";
import Footer from "../src/components/Footer";

function App() {
  return (
    <>
      <Header />
      <h1>hello world</h1>
      {/* testing img functions*/}
      <img src={getImageURL("logo.png")} alt="" />
      <h1>hello world</h1>
      <Footer />
    </>
  );
}

export default App;
