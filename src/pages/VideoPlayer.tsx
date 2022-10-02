// Node modules
import { useParams } from "react-router-dom";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";

// Test code: BTKERGGNqRI
export default function VideoPlayer() {
  // Global state
  const { code } = useParams();

  // Properties
  const options: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: { autoplay: 1 },
  };

  // Methods
  function onReady(event: YouTubeEvent<any>): void {
    alert("pausing video");
    event.target.pauseVideo();
  }

  return (
    <div id="video-player">
      <h1>Watch video</h1>
      <YouTube videoId="BTKERGGNqRI" opts={options} onReady={onReady} />
    </div>
  );
}
