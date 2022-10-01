// Project files
import Placeholder from "assets/images/placeholders/banner.png";
import iContent from "interfaces/iContent";

interface iProps {
  item: iContent;
}

export default function BannerHome({ item }: iProps) {
  const { id, banner_url, logo_url, title, summary } = item;

  // Methods
  function onPlay(): void {
    alert(`Wanting to watch ${id}`);
  }

  function onMoreInfo(): void {
    alert(`Wanting to learn more about ${id}`);
  }

  // Components
  const titleLogo = <img src={logo_url} className="logo" />;
  const titleText = <h3>{title}</h3>;

  return (
    <header className="banner-home">
      <div className="content">
        {/* Check if the banner image exist otherwise use the title as a backup */}
        {logo_url === "" ? titleText : titleLogo}
        <p>{summary}</p>
        <div className="buttons">
          <button onClick={onPlay} className="button-white">
            Play
          </button>
          <button onClick={onMoreInfo} className="button-gray">
            More info
          </button>
        </div>
      </div>
      <img
        className="background-image"
        src={banner_url}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
    </header>
  );
}
