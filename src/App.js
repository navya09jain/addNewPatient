import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";

function App() {
  return (
    <div>
      <div className="flex flex-row ">
        <div>
          <Menu />
        </div>
        <div>
          <Navbar />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
