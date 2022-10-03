// Fake data
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";

// Project files
import BannerHome from "components/HeroHome";
import ContainerCards from "components/CardContainer";
import NavigationBar from "components/NavigationBar";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";

export default function Home() {
  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iContent>());

  // Properties
  const series = data.filter((item) => item.type_id === 1);
  const movies = data.filter((item) => item.type_id === 2);
  const documentaries = data.filter((item) => item.type_id === 3);

  // Methods
  useEffect(() => {
    fakeFetch("content").then((response) => {
      if (response.status == "ok") {
        setData(response.data);
        setStatus(eStatus.READY);
      } else {
        setStatus(eStatus.ERROR);
      }
    });
  }, []);

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;
  if (data.length === 0) return <StatusEmpty />;

  return (
    <div id="home">
      <NavigationBar />
      <BannerHome item={data[27]} />
      <div className="containers">
        <ContainerCards title="Series" data={series} />
        <ContainerCards title="Movies" data={movies} />
        <ContainerCards title="Documentaries" data={documentaries} />
      </div>
    </div>
  );
}
