// Node modules
import { useEffect, useState } from "react";

// Project files
import NavigationBar from "components/NavigationBar";
import iContent from "interfaces/iContent";

// Fake data
import FakeContent from "fake-data/fake-content.json";
import CardBasic from "components/CardBasic";

export default function Home() {
  // Local state
  const [status, setStatus] = useState(0); // 0 = loading, 1 = loaded, 2 = error;
  const [data, setData] = useState(new Array<iContent>());

  // Properties

  // Methods
  useEffect(() => {
    const fakeDelayInMiliseconds = 1000;

    setTimeout(fakeAPICall, fakeDelayInMiliseconds);
  }, []);

  function fakeAPICall(): void {
    // 3 out of 4 times the call will be a success, 1 out 4 it will fail
    const chanceToSucced = Math.floor(Math.random() * 4);

    if (chanceToSucced > 0) {
      setData(FakeContent);
      setStatus(1);
    } else {
      setStatus(2);
    }
  }

  // Components
  const series = data.filter((item) => item.type_id == 1);
  const movies = data.filter((item) => item.type_id == 2);
  const documentaries = data.filter((item) => item.type_id == 3);

  const CardsSeries = series.map((item) => (
    <CardBasic key={item.id} id={item.id} imageURL={item.thumbnail_url} />
  ));
  const CardsMovies = movies.map((item) => (
    <CardBasic key={item.id} id={item.id} imageURL={item.thumbnail_url} />
  ));
  const CardsDocumentaries = documentaries.map((item) => (
    <CardBasic key={item.id} id={item.id} imageURL={item.thumbnail_url} />
  ));

  // Safeguards
  if (status == 0) return <p>⏰ Loading</p>;
  if (status == 2) return <p>❌ Could not load data</p>;

  return (
    <div id="home">
      <NavigationBar />

      {/* Series */}
      <section>
        <h2>Series</h2>
        {CardsSeries}
      </section>

      {/* Movies */}
      <section>
        <h2>Movies</h2>
        {CardsMovies}
      </section>

      {/* Documentaries */}
      <section>
        <h2>Documentaries</h2>
        {CardsDocumentaries}
      </section>

      {/* Footer */}
      <footer>© 1997-2022 Netflix, Inc.</footer>
    </div>
  );
}
