// Fake data
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";

// Project files
import eStatus from "interfaces/eStatus";
import StatusError from "./StatusError";
import StatusLoading from "./StatusLoading";

interface iProps {
  id: number;
}

export default function ModalContent({ id }: iProps) {
  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState({});

  // Methods
  useEffect(() => {
    fakeFetch("contentDetails").then((response) => {
      if (response.status == "ok") {
        console.log("contentDetails", response.data);
        setData(response.data);
        setStatus(eStatus.READY);
      } else {
        setStatus(eStatus.ERROR);
      }
    });
  }, []);

  function onClick(): void {
    // go to the player page and send the videoCode
  }

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  return (
    <div className="modal-content">
      <h1>Modal content</h1>
      <p>id: @{id}@</p>
      <button onClick={onClick} className="button-white">
        Play
      </button>
    </div>
  );
}
