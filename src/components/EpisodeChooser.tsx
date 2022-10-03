// Project files
import iDetailsSeries from "interfaces/iDetailsSeries";

interface iProps {
  episodes: iDetailsSeries[];
}

export default function EpisodeChooser({ episodes }: iProps) {
  // Properties
  const number_of_sesions: number = 0;

  return (
    <section className="episode-chooser">
      <header>
        <h2>Episodes</h2>
        <select name="cars">
          <option value="1">Season 1</option>
          <option value="2">Season 2</option>
          <option value="3">Season 3</option>
        </select>
      </header>
      <div>
        <article>
          <h3>EPISODE NAME</h3>
          <p>SUMMARY</p>
        </article>
        <article>
          <h3>EPISODE NAME</h3>
          <p>SUMMARY</p>
        </article>
        <article>
          <h3>EPISODE NAME</h3>
          <p>SUMMARY</p>
        </article>
      </div>
    </section>
  );
}
