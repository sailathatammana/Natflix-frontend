// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Home from "./pages/Home";
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
