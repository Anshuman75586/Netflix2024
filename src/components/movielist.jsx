import Moviecard from "./moviecard";

const Movielist = ({ title, movies, fullWidth }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <section
      className={`w-full ${fullWidth ? "px-0" : "px-4 sm:px-6 md:px-12"} py-6`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-6 md:px-12">
        {title}
      </h2>

      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 sm:px-6 md:px-12 scroll-smooth">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="
              flex-shrink-0 w-full sm:w-48 md:w-52 lg:w-56
              snap-center
            "
          >
            <Moviecard posterPath={movie.poster_path} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Movielist;
