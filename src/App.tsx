import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./home/index"; // Import your components here
import { About } from "./about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
}

export default App;
