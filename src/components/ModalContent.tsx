// Fake data
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import BannerModalContent from "components/BannerModalContent";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";
import iDetails from "interfaces/iDetails";
import { useModal } from "state/ModalContext";

interface iProps {
  item: iContent;
}

export default function ModalContent({ item }: iProps) {
  const { id, summary } = item;

  // Global state
  const navigate = useNavigate();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [details, setDetails] = useState({} as iDetails);

  // Methods
  useEffect(() => {
    fakeFetch("contentDetails", id).then((response) => {
      if (response.status == "ok") {
        setDetails(response.data);
        setStatus(eStatus.READY);
      } else {
        setStatus(eStatus.ERROR);
      }
    });
  }, []);

  function onClick(): void {
    navigate(`video/${details.videoCode}`);
    setModal(null);
  }

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  return (
    <div className="modal-content">
      <BannerModalContent item={item} onClick={onClick} />

      <section className="description">
        <p>YEAR • X seasons • CATEGORY</p>
        <p>{summary}</p>
      </section>

      {/* Episode chooser */}
    </div>
  );
}
