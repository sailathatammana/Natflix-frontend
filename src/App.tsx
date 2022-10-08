// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Modal from "components/Modal";
import Admin from "pages/Admin";
import AdminContent from "pages/AdminContent";
import Home from "pages/Home";
import VideoPlayer from "pages/VideoPlayer";
import NotFound from "pages/NotFound";
import { ModalProvider } from "state/ModalContext";
import "styles/style.css";
import AdminDetailsOther from "pages/AdminDetailsOther";

export default function App() {
  return (
    <div className="App">
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-content/:code" element={<AdminContent />} />
            <Route path="/admin-details-other/:code" element={<AdminDetailsOther />} />
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
