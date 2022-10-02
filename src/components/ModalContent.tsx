// Fake data
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import iContentDetails from "interfaces/iContentDetails";
import eStatus from "interfaces/eStatus";
import { useModal } from "state/ModalContext";
import BannerModalContent from "./BannerModalContent";

interface iProps {
  id: number;
}

export default function ModalContent({ id }: iProps) {
  // Global state
  const navigate = useNavigate();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState({} as iContentDetails);

  // Methods
  useEffect(() => {
    fakeFetch("contentDetails", id).then((response) => {
      if (response.status == "ok") {
        setData(response.data);
        setStatus(eStatus.READY);
      } else {
        setStatus(eStatus.ERROR);
      }
    });
  }, []);

  function onClick(): void {
    navigate(`video/${data.videoCode}`);
    setModal(null);
  }

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  return (
    <div className="modal-content">
      <BannerModalContent item={data} onClick={onClick} />

      <section className="description">
        <p>YEAR • X seasons • CATEGORY</p>
        <p>{data.summary}</p>
      </section>

      {/* Episode chooser */}
    </div>
  );
}
