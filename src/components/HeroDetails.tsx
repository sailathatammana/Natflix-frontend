// Node modules
import { MouseEventHandler } from "react";

// Project files
import IconPlay from "assets/images/icons/icon-play-black.svg";
import Placeholder from "assets/images/placeholders/banner.png";
import iContent from "interfaces/iContent";

interface iProps {
  item: iContent;
  videoCode: string;
  onClick: Function;
}

export default function HeroDetails({ item, videoCode, onClick }: iProps) {
  const { banner_url, logo_url } = item;

  // Components
  const titleLogo = <img src={logo_url} className="logo" />;

  return (
    <header className="hero hero-details">
      <img
        className="background-image"
        src={banner_url}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
      <div className="content">
        {logo_url && titleLogo}
        <button onClick={() => onClick(videoCode)} className="button-white">
          <img className="icon" src={IconPlay} />
          Play
        </button>
      </div>
    </header>
  );
}
