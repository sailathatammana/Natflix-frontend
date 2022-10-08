// Node modules
import { useParams } from "react-router-dom";

// Project files
import ContainerCards from "components/ListCards";
import NavigationBar from "components/NavigationBar";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import eStatus from "interfaces/eStatus";
import useFetch from "state/useFetch";

export default function Content() {
  // Properties
  const endPoint = "content/";

  // Global state
  const { code } = useParams();
  console.log("code", code);
  const { data, status } = useFetch(endPoint + code + "/", null, code);

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;
  if (data.length === 0) return <StatusEmpty />;

  return (
    <div id="content">
      <NavigationBar />
      <header>
        <h1>All our {code}</h1>
      </header>
      <ContainerCards title="Titles avaialble" data={data} />
    </div>
  );
}
