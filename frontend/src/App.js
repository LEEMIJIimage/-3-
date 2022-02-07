import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chart from "./Component/Chart/Chart";
import Main from "./Component/Main/Main";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/Chart" element={<Chart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
