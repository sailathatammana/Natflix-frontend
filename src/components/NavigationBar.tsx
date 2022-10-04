// Node modules
import { Link } from "react-router-dom";

// Project files
import Logo from "assets/images/logo.svg";

export default function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <img src={Logo} />
      <div>
        <Link to="/">Home</Link>
        <Link to="/">Series</Link>
        <Link to="/">Series</Link>
        <Link to="/">Films</Link>
        <Link to="/">Documentaries</Link>
      </div>
    </nav>
  );
}
