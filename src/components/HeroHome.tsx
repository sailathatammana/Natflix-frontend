// Project files
import IconInfo from "assets/images/icons/icon-info-white.svg";
import Placeholder from "assets/images/placeholders/banner.png";
import ModalContent from "components/ModalContent";
import iContent from "interfaces/iContent";
import { useModal } from "state/ModalContext";

interface iProps {
  item: iContent;
}

export default function BannerHome({ item }: iProps) {
  const { banner_url, logo_url, title, summary } = item;

  // Global state
  const { setModal } = useModal();

  // Components
  const Modal = <ModalContent item={item} />;
  const titleLogo = <img src={logo_url} className="logo" />;
  const titleText = <h3>{title}</h3>;

  return (
    <header className="banner banner-home">
      <div className="content">
        {/* Check if the banner image exist otherwise use the title as a backup */}
        {logo_url === "" ? titleText : titleLogo}
        <p>{summary}</p>
        <div className="buttons">
          <button
            onClick={() => setModal(Modal)}
            className="button button-gray"
          >
            <img className="icon" src={IconInfo} />
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
