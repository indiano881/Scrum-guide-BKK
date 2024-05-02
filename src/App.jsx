import { getImageURL } from "../utils/functions.js";
import Scrum from "./components/Scrum"
import paragraphArray from "./data/data.js";

function App() {
  return (
    <>
      <h1>hello world</h1>
      {/* testing img functions*/}
      <img src={getImageURL("logo.png")} alt="" />
      {paragraphArray.map((paragraph, index)=> <Scrum  key={index} {...paragraph}/>)}

    </>
  );
}

export default App;
