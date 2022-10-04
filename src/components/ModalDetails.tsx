// Fake data
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import EpisodeChooser from "components/EpisodeChooser";
import HeroDetails from "components/HeroDetails";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";
import iDetailsContent from "interfaces/iDetailsContent";
import iDetailsSeries from "interfaces/iDetailsSeries";
import { useModal } from "state/ModalContext";

interface iProps {
  item: iContent;
}

export default function ModalDetails({ item }: iProps) {
  const { id, title, summary } = item;

  // Global state
  const navigate = useNavigate();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [details, setDetails] = useState(
    {} as iDetailsContent | [] as iDetailsSeries[]
  );

  // Properties
  const isASeries: boolean = Array.isArray(details);
  const firstVideoCode = getFirstVideoCode();

  // Methods
  useEffect(() => {
    fakeFetch("contentDetails", id).then((response) => {
      const { data, status } = response;

      status === "ok" ? onSuccess(data) : onFailure();
    });
  }, []);

  function onSuccess(data: any) {
    setDetails(data);
    setStatus(eStatus.READY);
  }

  function onFailure() {
    setStatus(eStatus.ERROR);
  }

  function getFirstVideoCode(): string {
    // @ts-ignore
    return isASeries ? details[0].video_code : details.video_code;
  }

  function onClick(videoCode: string): void {
    navigate(`video/${videoCode}`);
    setModal(null);
  }

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;
  if (details.length === 0) return <StatusEmpty />;

  return (
    <div className="modal-details">
      <HeroDetails item={item} videoCode={firstVideoCode} onClick={onClick} />
      <section className="description">
        <h2>{title}</h2>
        <p>{summary}</p>
      </section>
      {isASeries && <EpisodeChooser episodes={details} onClick={onClick} />}
    </div>
  );
}
