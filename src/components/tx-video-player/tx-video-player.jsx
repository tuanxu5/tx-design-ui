import { useRef, useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  background: ${colors.bgFillLight};
  border-radius: 8px;
  overflow: hidden;
`;

const VideoStyled = styled.video`
  width: 100%;
  display: block;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PlayButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  padding: 4px;
`;

const TimeDisplay = styled.span`
  color: white;
  font-size: 12px;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.progress}%;
  background: ${colors.primary};
`;

const TxVideoPlayer = ({ src, poster, autoplay = false, controls = true, ...props }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = e => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = x / rect.width;
      videoRef.current.currentTime = percent * duration;
    }
  };

  return (
    <VideoContainer {...props}>
      <VideoStyled
        ref={videoRef}
        src={src}
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={togglePlay}
      />
      {controls && (
        <Controls>
          <PlayButton onClick={togglePlay}>{playing ? "⏸️" : "▶️"}</PlayButton>
          <TimeDisplay>
            {formatTime(currentTime)} / {formatTime(duration)}
          </TimeDisplay>
          <ProgressBar onClick={handleProgressClick}>
            <ProgressFill progress={(currentTime / duration) * 100 || 0} />
          </ProgressBar>
        </Controls>
      )}
    </VideoContainer>
  );
};

export default TxVideoPlayer;
