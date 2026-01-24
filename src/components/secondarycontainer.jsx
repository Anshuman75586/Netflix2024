import React from "react";
import Movielist from "./movielist";
import { useSelector } from "react-redux";
import Disclaimer from "./Disclamier";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) return null;

  return (
    <section className="bg-black w-full px-4 sm:px-6 md:px-12 pt-[180px] sm:pt-32 pb-8">
      {/* Movie lists */}
      <div className="relative z-10 space-y-8">
        <Disclaimer />
        <Movielist title="Now Playing" movies={movies.nowPlayingMovies} />
        <Movielist title="Upcoming" movies={movies.upComingMovies} />
        <Movielist title="Popular" movies={movies.popularMovies} />
        <Movielist title="Top Rated" movies={movies.topratedMovies} />
      </div>
    </section>
  );
};

export default Secondarycontainer;
