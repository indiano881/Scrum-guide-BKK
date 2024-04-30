import { getImageURL } from "../utils/functions.js";




import Office from "./components/Office/index.jsx";

function App() {
  return (
    <>
      <h1>hello world</h1>
      {/* testing img functions*/}
      <img src={getImageURL("logo.png")} alt="" />
      <Office />
    </>
  );
}

export default App;
