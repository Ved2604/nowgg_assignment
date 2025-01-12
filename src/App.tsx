import Navbar from "./components/Navbar";
import ExploreGrid from "./components/ExploreGrid";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="bg-gray-100">
        <Navbar setSearchTerm={setSearchTerm} />
        <ExploreGrid searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
