// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Home from "pages/Home";
import VideoPlayer from "pages/VideoPlayer";
import "styles/style.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:code" element={<VideoPlayer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
