// Fake data (replace this with a real fetch)
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import NavigationBarAdmin from "components/NavigationBarAdmin";
import InputField from "components/InputField";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import eStatus from "interfaces/eStatus";
import iDetailsSeries from "interfaces/iDetailsSeries";
import ItemAdminEpisode from "components/ItemAdminEpisode";

export default function AdminDetailSeries() {
  // Global state
  const { code } = useParams();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iDetailsSeries>());

  // Properties
  const endPoint: string = "details-series/:id";

  // Methods
  useEffect(() => {
    fakeFetch(endPoint, code)
      .then((response) => onSuccess(response.data))
      .catch((error) => onFailure(error));
  }, []);

  function onSuccess(data: iDetailsSeries[]) {
    setData(data);
    setStatus(eStatus.READY);
  }

  function onFailure(error: string) {
    console.error(error);
    setStatus(eStatus.ERROR);
  }

  function onCreate() {
    alert("Series create");
  }

  function onUpdate(episode: iDetailsSeries) {
    alert(`Series update ${episode.id}`);
  }

  function onDelete(episodeId: number) {
    alert(`Series delete ${episodeId}`);
  }

  // Components
  const Items = data.map((item) => (
    <ItemAdminEpisode
      key={item.id}
      item={item}
      actions={[onUpdate, onDelete]}
    />
  ));

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  return (
    <div id="admin-detail-series" className="admin-pages">
      <NavigationBarAdmin />
      <header>
        <h1>Admin details</h1>
      </header>
      {Items}
      <hr />
      <button onClick={onCreate}>Create episode</button>
    </div>
  );
}
