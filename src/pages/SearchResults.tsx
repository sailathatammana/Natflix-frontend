import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import ContainerCards from "components/ListCards";
import NavigationBar from "components/NavigationBar";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";

export default function SearchResults() {
  // Global state
  const { query }: any = useParams();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iContent>());

  const endPoint = "http://localhost:8080/content";

  // Methods
  useEffect(() => {
    setStatus(eStatus.LOADING);
    fetch(endPoint)
      .then((response) => response.json())
      .then((result) => onSuccess(result))
      .catch((error) => onFailure(error));
  }, [query]);

  function onSuccess(data: iContent[]) {
    setData(data);
    setStatus(eStatus.READY);
  }

  function onFailure(error: string) {
    console.error(error);
    setStatus(eStatus.ERROR);
  }

  const filteredResults = data.filter((item) =>
    item.title.toUpperCase().match(query.toUpperCase())
  );

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  return (
    <div id="content">
      <NavigationBar />
      <header>
        <h1>Results for {query}</h1>
      </header>
      {filteredResults.length === 0 ? (
        <p className="text">No results found for {query}</p>
      ) : (
        <ContainerCards title="Titles avaialble" data={filteredResults} />
      )}
    </div>
  );
}
