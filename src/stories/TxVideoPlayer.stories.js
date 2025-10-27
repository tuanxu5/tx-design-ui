import TxVideoPlayer from "../components/tx-video-player/tx-video-player";

const TxVideoPlayerStory = {
  title: "tx-design-ui/Feedback/TxVideoPlayer",
  component: TxVideoPlayer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxVideoPlayerStory;

export const Default = {
  render: () => {
    return (
      <div style={{ width: "800px" }}>
        <TxVideoPlayer
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          controls
        />
      </div>
    );
  },
};

export const WithPoster = {
  render: () => {
    return (
      <div style={{ width: "800px" }}>
        <TxVideoPlayer
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          poster="https://via.placeholder.com/800x450"
          controls
        />
      </div>
    );
  },
};
