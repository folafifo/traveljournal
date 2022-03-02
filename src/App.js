import Navbar from "./components/Navbar";
import Sector from "./components/Sector";
import Data from "./data";
import "./index.css";

function App() {
  const sectors = Data.map((item, i, array) => {
    return (
      <div>
        <Sector item={item} />
        {!(i === array.length - 1) ? <hr className="solid" /> : null}
      </div>
    );
  });

  return (
    <div className="App">
      <Navbar />
      <div className="Content">{sectors}</div>
    </div>
  );
}

export default App;
