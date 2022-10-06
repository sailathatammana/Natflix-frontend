// Node modules
import { Link } from "react-router-dom";

export default function Admin() {
  // Reference
  // path="/admin/:/:code"

  return (
    <div id="admin">
      <h1>Admin panel</h1>

      <Link to="/admin/content/movies">Movies</Link>
      <Link to="/admin/content/documentaries">Documentaries</Link>
      <Link to="/admin/content/series">TV Series</Link>
    </div>
  );
}
