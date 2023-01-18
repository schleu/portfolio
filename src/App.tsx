import { Body } from "./components/Body";
import { Header } from "./components/Header/Header";

import "./main.css";

function App() {
  return (
    <div className="bg-green-350 w-full pt-20 flex flex-col overflow-y-auto">
      <Header />
      <Body />
    </div>
  );
}

export default App;
