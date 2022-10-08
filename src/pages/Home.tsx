// Project files
import BannerHome from "components/HeroHome";
import ContainerCards from "components/ListCards";
import NavigationBar from "components/NavigationBar";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";
import useFetch from "state/useFetch";

export default function Home() {
  // Properties
  const endPoint = "content/";

  // Global state
  const { data, status } = useFetch(endPoint);

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;
  if (data.length === 0) return <StatusEmpty />;

  // Derived state
  const series = data.filter((item: iContent) => item.type_id === 1);
  const movies = data.filter((item: iContent) => item.type_id === 2);
  const documentaries = data.filter((item: iContent) => item.type_id === 3);

  return (
    <div id="home">
      <NavigationBar />
      <BannerHome item={data[0]} />
      <ContainerCards title="Series" data={series} />
      <ContainerCards title="Movies" data={movies} />
      <ContainerCards title="Documentaries" data={documentaries} />
    </div>
  );
}
