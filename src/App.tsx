// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Modal from "components/Modal";
import Home from "pages/Home";
import VideoPlayer from "pages/VideoPlayer";
import NotFound from "pages/NotFound";
import Test from "pages/Test";
import { ModalProvider } from "state/ModalContext";
import "styles/style.css";

export default function App() {
  return (
    <div className="App">
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Home />} />
            <Route path="/video/:code" element={<VideoPlayer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* To handle the modal/popups of the website */}
          <Modal />
        </BrowserRouter>
      </ModalProvider>
    </div>
  );
}
