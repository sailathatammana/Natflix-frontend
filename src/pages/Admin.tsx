// Node modules
import { Link } from "react-router-dom";

// Project files
import ImageMovies from "assets/images/admin-movies.jpg";
import ImageDocumentaries from "assets/images/admin-documentaries.jpg";
import ImageSeries from "assets/images/admin-series.jpg";

export default function Admin() {
  return (
    <div id="admin">
      <h1>Admin main menu</h1>
      <p>Please choose one of the following options to start adding content:</p>
      <div className="items">
        <Link className="item" to="/admin/content/movies">
          <img src={ImageMovies} />
          <h3>Movies</h3>
        </Link>
        <Link className="item" to="/admin/content/documentaries">
          <img src={ImageDocumentaries} />
          <h3>Documentaries</h3>
        </Link>
        <Link className="item" to="/admin/content/series">
          <img src={ImageSeries} />
          <h3>TV Series</h3>
        </Link>
      </div>
    </div>
  );
}
