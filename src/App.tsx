import Navbar from "./components/Navbar";
import ExploreGrid from "./components/ExploreGrid";
import "./App.css";
import { useState, useEffect } from "react";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        {isMobile ? (
          <MobileNavbar setSearchTerm={setSearchTerm} />
        ) : (
          <Navbar setSearchTerm={setSearchTerm} />
        )}
        <ExploreGrid searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
