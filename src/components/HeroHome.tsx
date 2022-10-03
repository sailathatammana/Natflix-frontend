// Project files
import IconInfo from "assets/images/icons/icon-info-white.svg";
import Placeholder from "assets/images/placeholders/banner.png";
import ModalDetails from "components/ModalDetails";
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
  const Modal = <ModalDetails item={item} />;
  const Logo = <img src={logo_url} className="logo" />;
  const Heading = <h3>{title}</h3>;

  return (
    <header className="hero hero-home">
      <img
        className="background-image"
        src={banner_url}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
      <div className="content">
        {logo_url === "" ? Heading : Logo}
        <p>{summary}</p>
        <button onClick={() => setModal(Modal)} className="button-gray">
          <img className="icon" src={IconInfo} />
          More info
        </button>
      </div>
    </header>
  );
}
