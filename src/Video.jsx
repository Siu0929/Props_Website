import React from "react";
import { useEffect, useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set the video to start at 2 minutes (120 seconds)
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 120; // Set to 120 seconds (2 minutes)
      }
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      if (videoElement) {
        videoElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  return (
    <div className="relative h-screen">
      <iframe
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/p4QG59y6FGE?start=120"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
