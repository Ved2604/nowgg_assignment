import Navbar from "./components/Navbar";
import ExploreGrid from "./components/ExploreGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <ExploreGrid />
        <Footer />
      </div>
    </>
  );
}

export default App;
