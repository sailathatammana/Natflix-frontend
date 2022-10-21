// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import Admin from "pages/Admin";
import AdminContent from "pages/AdminContent";
import AdminDetailsOther from "pages/AdminDetailsOther";
import AdminDetailsSeries from "pages/AdminDetailsSeries";
import NavigationBarAdmin from "components/NavigationBarAdmin";
import NotFound from "pages/NotFound";

export default function AdminRoutes() {
  return (
    <div>
      <NavigationBarAdmin />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Admin />} />
        <Route path="/admin-content/:code" element={<AdminContent />} />
        <Route
          path="/admin-details-other/:code"
          element={<AdminDetailsOther />}
        />
        <Route
          path="/admin-details-series/:code"
          element={<AdminDetailsSeries />}
        />
      </Routes>
    </div>
  );
}
