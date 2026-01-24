import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = () => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer();

  if (!trailerVideo?.key) return null;

  return (
    <div className="w-full h-[50vh] sm:h-[70vh] md:h-[90vh] lg:h-screen relative overflow-hidden z-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        title="Movie Trailer"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      ></iframe>

      {/* subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
    </div>
  );
};

export default VideoBackground;
