// Node modules
import { useEffect, useState } from "react";

// Project files
import eStatus from "interfaces/eStatus";

// Fake files
import fakeFetch from "scripts/fakeFetch";

interface iProps {
  endPoint: string;
  payload: any;
  revalidate: any;
}

export default function useFetch(
  endPoint: string,
  payload: any = null,
  revalidate: any = null
) {
  // Local state
  const [data, setData] = useState<any>();
  const [status, setStatus] = useState(eStatus.LOADING);

  // Methods
  useEffect(() => {
    setStatus(eStatus.LOADING);
    fakeFetch(endPoint, payload)
      .then((response) => onSuccess(response.data))
      .catch((error) => onFailure(error));
  }, [revalidate]);

  function onSuccess(data: any) {
    setData(data);
    setStatus(eStatus.READY);
  }

  function onFailure(error: string) {
    console.error(error);
    setStatus(eStatus.ERROR);
  }

  return { data, setData, status };
}
