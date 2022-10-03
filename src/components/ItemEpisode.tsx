// Project files
import iDetailsSeries from "interfaces/iDetailsSeries";
import Placeholder from "assets/images/placeholders/card-basic.png";

interface iProps {
  item: iDetailsSeries;
  onClick: Function;
}

export default function ItemEpisode({ item, onClick }: iProps) {
  const { episode, title, summary, thumbnail_url, video_code } = item;

  return (
    <article className="item-episode" onClick={() => onClick(video_code)}>
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
