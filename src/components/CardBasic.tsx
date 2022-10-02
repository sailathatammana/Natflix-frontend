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

  // Properties
  const Modal = <ModalContent id={id} />;

  // Methods
  function onClick() {
    console.log("clicked on card", id);
    setModal(Modal);
  }

  return (
    <article onClick={onClick} className="card-basic">
      <img
        src={imageURL}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
    </article>
  );
}
