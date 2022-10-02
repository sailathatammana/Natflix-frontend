import { useParams } from "react-router-dom";

export default function VideoPlayer() {
  // Global state
  const { code } = useParams();

  return (
    <div id="video-player">
      <h1>Watching video code {code}</h1>
    </div>
  );
}
