// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Home from "pages/Home";
import VideoPlayer from "pages/VideoPlayer";
import Modal from "components/Modal";
import { ModalProvider } from "state/ModalContext";
import "styles/style.css";

export default function App() {
  return (
    <div className="App">
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:code" element={<VideoPlayer />} />
          </Routes>
        </BrowserRouter>
        {/* To handle the modal/popups of the website */}
        <Modal />
      </ModalProvider>
    </div>
  );
}
