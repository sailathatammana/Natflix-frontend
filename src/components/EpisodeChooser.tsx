// Node modules
import { ChangeEvent, useState } from "react";

// Project files
import ItemEpisodes from "components/ItemEpisode";
import iDetailsSeries from "interfaces/iDetailsSeries";
import InputSelect from "./InputSelect";

interface iProps {
  episodes: iDetailsSeries[];
  onClick: Function;
}

export default function EpisodeChooser({ episodes, onClick }: iProps) {
  // Local state
  const [selectedSeason, setSelectedSeason] = useState("1");

  // Properties
  const seasonsAvailable = episodes
    .map((item) => item.season_number)
    .sort((a, b) => b - a);
  const numberOfSeasons: number = seasonsAvailable[0]; // take the highest number
  const selectedEpisodes = episodes.filter(
    (item) => item.season_number === Number(selectedSeason)
  );
  const inputSelectLabels = generateSeasonLabels(numberOfSeasons);

  // Components
  const Episodes = selectedEpisodes.map((item) => (
    <ItemEpisodes key={item.id} item={item} onClick={onClick} />
  ));

  // Methods
  function generateSeasonLabels(numberOfSeasons: number): string[] {
    let result: string[] = [];

    for (let index = 0; index < numberOfSeasons; index++) {
      result.push(`Season ${index + 1}`);
    }

    return result;
  }
  function onChange(event: ChangeEvent<HTMLSelectElement>): void {
    setSelectedSeason(event.currentTarget.value);
  }

  return (
    <section className="episode-chooser">
      <header>
        <h2>Episodes</h2>
        <InputSelect
          state={selectedSeason}
          data={inputSelectLabels}
          onChange={onChange}
        />
      </header>
      <div>{Episodes}</div>
    </section>
  );
}
