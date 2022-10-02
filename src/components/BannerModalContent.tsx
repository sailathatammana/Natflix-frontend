// Project files
import Placeholder from "assets/images/placeholders/banner.png";
import iContentDetails from "interfaces/iContentDetails";
import { MouseEventHandler } from "react";

interface iProps {
  item: iContentDetails;
  onClick: MouseEventHandler;
}

export default function BannerModalContent({ item, onClick }: iProps) {
  const { id, banner_url, logo_url, title } = item;

  // Components
  const titleLogo = <img src={logo_url} className="logo" />;
  const titleText = <h3>{title}</h3>;

  return (
    <header>
      <div className="content">
        {/* Check if the banner image exist otherwise use the title as a backup */}
        {logo_url === "" ? titleText : titleLogo}
        <div className="buttons">
          <button onClick={onClick} className="button-white">
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
