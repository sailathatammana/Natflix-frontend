// Project file
import Logo from "assets/images/logo.svg";

export default function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <img src={Logo} />
      <div>
        <a href="#">Home</a>
        <a href="#">Series</a>
        <a href="#">Series</a>
        <a href="#">Films</a>
        <a href="#">Documentaries</a>
      </div>
    </nav>
  );
}
