import "./styles/global.css";
import { getImageURL } from "../utils/functions.js";
import Footer from "../src/components/Footer"

function App() {
  return (
    <>
      <h1>hello world</h1>
      {/* testing img functions*/}
      <img src={getImageURL("logo.png")} alt="" />
     <h1>hello world</h1>
     <Footer/>
    </>
  );
}

export default App;
