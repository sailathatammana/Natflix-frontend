// Node modules
import { useEffect, useState } from "react";

// Project files
import NavigationBar from "components/NavigationBar";
import ContainerCards from "components/ContainerCards";
import StatusLoading from "components/StatusLoading";
import StatusError from "components/StatusError";
import iContent from "interfaces/iContent";
import eStatus from "interfaces/eStatus";

// Fake data
import FakeContent from "fake-data/fake-content.json";

export default function Home() {
  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iContent>());

  // Properties
  const series = data.filter((item) => item.type_id == 1);
  const movies = data.filter((item) => item.type_id == 2);
  const documentaries = data.filter((item) => item.type_id == 3);

  // Methods
  useEffect(() => {
    const fakeDelayInMiliseconds = 1000;

    setTimeout(fakeAPICall, fakeDelayInMiliseconds);
  }, []);

  // move to a fake script folder
  function fakeAPICall(): void {
    // Gets a random number. If is bigger than 0 we get a server success
    const chanceToSucced = Math.floor(Math.random() * 10);

    if (chanceToSucced > 0) {
      setData(FakeContent);
      setStatus(eStatus.READY);
    } else {
      setStatus(eStatus.ERROR);
    }
  }

  // Safeguards
  if (status == eStatus.LOADING) return <StatusLoading />;
  if (status == eStatus.ERROR) return <StatusError />;

  return (
    <div id="home">
      <NavigationBar />
      <ContainerCards title="Series" data={series} />
      <ContainerCards title="Movies" data={movies} />
      <ContainerCards title="Documentaries" data={documentaries} />
    </div>
  );
}