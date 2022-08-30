import "./App.css";
import Alerts from "./components/Alerts";
import Header from "./components/Header";
import Information from "./components/Information";

function App() {
  return (
    <div className="App">
      <Header />
      <Alerts />
      <Information />
    </div>
  );
}

export default App;
