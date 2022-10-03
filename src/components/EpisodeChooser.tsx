// Node modules
import { useState } from "react";

// Project files
import ItemEpisodes from "components/ItemEpisode";
import iDetailsSeries from "interfaces/iDetailsSeries";

interface iProps {
  episodes: iDetailsSeries[];
  onClick: Function;
}

export default function EpisodeChooser({ episodes, onClick }: iProps) {
  // Local state
  const [season, setSeason] = useState(1);

  // Properties
  const numberOfSeasons: number = 0;
  const selectedEpisodes = episodes.filter((item) => item.season === season);

  // Components
  const Episodes = selectedEpisodes.map((item) => (
    <ItemEpisodes key={item.id} item={item} onClick={onClick} />
  ));

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
      <div>{Episodes}</div>
    </section>
  );
}
