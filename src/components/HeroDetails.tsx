// Node modules
import { MouseEventHandler } from "react";

// Project files
import Placeholder from "assets/images/placeholders/banner.png";
import iContent from "interfaces/iContent";
import iDetailsContent from "interfaces/iDetailsContent";

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
    <header className="banner banner-modal-content">
      <div className="content">
        {logo_url && titleLogo}
        <div className="buttons">
          <button
            onClick={() => onClick(videoCode)}
            className="button button-white"
          >
            Play
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
