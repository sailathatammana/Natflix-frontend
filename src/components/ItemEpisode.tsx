// Node modules
import { MouseEventHandler } from "react";

// Project files
import iDetailsSeries from "interfaces/iDetailsSeries";
import Placeholder from "assets/images/placeholders/card-basic.png";

interface iProps {
  item: iDetailsSeries;
  onClick: MouseEventHandler;
}

export default function ItemEpisode({ item, onClick }: iProps) {
  const { episode, title, summary, thumbnail_url } = item;

  return (
    <article onClick={onClick}>
      <span className="episode-number">{episode}</span>
      <img
        src={thumbnail_url}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
      <div className="content">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </article>
  );
}
