import "./styles/global.css";
import { getImageURL } from "../utils/functions.js";

function App() {
  return (
    <>
      <h1>hello world</h1>
      {/* testing img functions*/}
      <img src={getImageURL("logo.png")} alt="" />
    </>
  );
}

export default App;
