// Project files
import Placeholder from "assets/images/placeholders/card-basic.png";
import ModalContent from "components/ModalContent";
import iContent from "interfaces/iContent";
import { useModal } from "state/ModalContext";

interface iProps {
  item: iContent;
}

export default function CardBasic({ item }: iProps) {
  const { thumbnail_url } = item;

  // Global state
  const { setModal } = useModal();

  // Components
  const Modal = <ModalContent item={item} />;

  return (
    <article onClick={() => setModal(Modal)} className="card-basic">
      <img
        src={thumbnail_url}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
    </article>
  );
}
