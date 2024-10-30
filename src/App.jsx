import Home from "/src/Home";
import BlackScreen from "./BlackScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <div className="min-h-[100vh] min-w-[60]">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/black-screen" Component={BlackScreen} />
          </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
