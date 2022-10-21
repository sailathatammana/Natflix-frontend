// Node modules
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

// Project files
import Logo from "assets/images/logo.svg";
import search from "assets/images/icons/search.svg";
import CustomerLinks from "data/links-customer.json";
import { useUser } from "state/UserContext";

export default function NavigationBar() {
  // Global state
  const { setUser } = useUser();
  const [query, setQuery] = useState("");
  const history = useNavigate();

  // Components
  const Links = CustomerLinks.map((item) => (
    <Link key={item.id} to={item.url}>
      {item.label}
    </Link>
  ));

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    history(`/results/${query}`);
  }

  return (
    <nav className="navigation-bar">
      <Link to={CustomerLinks[0].url}>
        <img src={Logo} />
      </Link>
      <div>{Links}</div>
      <div className="left-items">
        <form className="search" onSubmit={onSearch}>
          <input
            type="text"
            placeholder="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <img src={search} alt="search" className="searchicon" />
        </form>
        <button className="button-logout" onClick={() => setUser(null)}>
          Logout
        </button>
      </div>
    </nav>
  );
}
