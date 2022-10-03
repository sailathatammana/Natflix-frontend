// Fake data
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import EpisodeChooser from "components/EpisodeChooser";
import HeroDetails from "components/HeroDetails";
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

  function getFirstVideoCode(isASeries: boolean): string {
    let result = "";

    console.log("details", details);

    if (isASeries) {
      result = details[0].video_code;
    } else {
      // @ts-ignore
      result = details.video_code;
    }

    return result;
  }

  function onClick(videoCode: string): void {
    navigate(`video/${videoCode}`);
    setModal(null);
  }

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  return (
    <div className="modal-content">
      <HeroDetails
        item={item}
        videoCode={getFirstVideoCode(isASeries)}
        onClick={onClick}
      />

      <section className="description">
        <h2>{title}</h2>
        <p>{summary}</p>
      </section>

      {/* Episode chooser */}
      {isASeries && <EpisodeChooser episodes={details} onClick={onClick} />}
    </div>
  );
}
