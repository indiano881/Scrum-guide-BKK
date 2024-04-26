import Header from "./components/Header/Header";
import { getImageURL } from "../utils/functions.js";

function App() {
  return (
    <>
      <Header />
      <h1>hello world</h1>
      {/* testing img functions*/}
      <img src={getImageURL("logo.png")} alt="" />
    </>
  );
}

export default App;
