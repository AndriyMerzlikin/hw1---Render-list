// import "./App.css";
import { animals } from "../src/data/animalsData";
import AnimalsList from "./components/AnimalsList/AnimalsList";

function App() {
  return (
    <div>
      <AnimalsList list={animals} />
    </div>
  );
}

export default App;
