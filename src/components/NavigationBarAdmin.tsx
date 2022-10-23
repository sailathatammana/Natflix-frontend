// Node modules
import { Link, useNavigate } from "react-router-dom";

// Project files
import Logo from "assets/images/logo.svg";
import AdminLinks from "data/links-admin.json";
import { useUser } from "state/UserContext";

export default function NavigationBarAdmin() {
  // Global state
  const { setUser } = useUser();
  const navigate = useNavigate();

  // Components
  const Links = AdminLinks.map((item) => (
    <Link key={item.id} to={item.url}>
      {item.label}
    </Link>
  ));

  function onLogout() {
    setUser(null);
    navigate("/");
  }

  return (
    <nav className="navigation-bar">
      <Link to="/">
        <img src={Logo} />
      </Link>
      <div className="links">{Links}</div>
      <div className="left-items">
        {/* Search bar goes here... */}
        <button className="button-logout" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
