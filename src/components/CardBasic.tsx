// Project files
import Placeholder from "assets/images/placeholders/card-basic.png";
import ModalContent from "./ModalContent";
import { useModal } from "state/ModalContext";

interface iProps {
  id: number;
  imageURL: string;
}

export default function CardBasic({ id, imageURL }: iProps) {
  // Global state
  const { setModal } = useModal();

  // Components
  const Modal = <ModalContent id={id} />;

  return (
    <article onClick={() => setModal(Modal)} className="card-basic">
      <img
        src={imageURL}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
    </article>
  );
}
