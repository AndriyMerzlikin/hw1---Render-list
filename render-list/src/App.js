// import "./App.css";
import { animals } from "../src/data/animalsData";
import AnimalsList from "./components/AnimalsList/AnimalList";

function App() {
  return (
    <>
      <AnimalsList list={animals} />
    </>
  );
}

export default App;
