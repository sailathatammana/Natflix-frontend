// Node modules
import { useEffect, useState } from "react";

// Project files
import NavigationBar from "components/NavigationBar";
import iContent from "interfaces/iContent";
import ContainerCards from "components/ContainerCards";

// Fake data
import FakeContent from "fake-data/fake-content.json";

export default function Home() {
  // Local state
  const [status, setStatus] = useState(0); // 0 = loading, 1 = loaded, 2 = error;
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

  function fakeAPICall(): void {
    // Gets a random number. If is bigger than 0 we get a server success
    const chanceToSucced = Math.floor(Math.random() * 10);

    if (chanceToSucced > 0) {
      setData(FakeContent);
      setStatus(1);
    } else {
      setStatus(2);
    }
  }

  // Safeguards
  if (status == 0) return <p>⏰ Loading</p>;
  if (status == 2) return <p>❌ Could not load data</p>;

  return (
    <div id="home">
      <NavigationBar />
      <ContainerCards title="Series" data={series} />
      <ContainerCards title="Movies" data={movies} />
      <ContainerCards title="Documentaries" data={documentaries} />
    </div>
  );
}
