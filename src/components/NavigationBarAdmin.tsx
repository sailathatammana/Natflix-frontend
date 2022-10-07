// Node modules
import { Link } from "react-router-dom";

// Project files
import Logo from "assets/images/logo.svg";

export default function NavigationBarAdmin() {
  return (
    <nav className="navigation-bar">
      <Link to="/admin">
        <img src={Logo} />
      </Link>
      <div>
        <Link to="/admin">Admin home</Link>
        <Link to="/admin/content/movies">Movies</Link>
        <Link to="/admin/content/documentaries">Documentaries</Link>
        <Link to="/admin/content/series">Series</Link>
      </div>
    </nav>
  );
}
