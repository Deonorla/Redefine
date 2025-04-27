import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };
  const handleVideoLoad = () => {
    setLoadedVideos((prevLoadedVideos) => prevLoadedVideos + 1);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                className="size-64 origin-center scale-150 object-cover object-center "
                id="current-video"
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                onLoadedData={handleVideoLoad}
                loop
                muted
              />
            </div>
          </div>
          <video
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            onLoadedData={handleVideoLoad}
            loop
            muted
          />
          <video
            className="absolute left-0 top-0 h-screen w-screen object-cover object-center"
            src={getVideoSrc(
              upcomingVideoIndex - 1 === 0
                ? totalVideos
                : upcomingVideoIndex - 1
            )}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
