const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute left-0 w-full h-full px-6 sm:px-24 text-white z-20
        flex flex-col justify-center items-center
        lg:justify-end lg:items-start lg:pb-24 lg:pl-24
      "
    >
      <h1 className="text-3xl sm:text-6xl font-bold mb-4 lg:text-6xl">
        {title}
      </h1>
      <p className="text-sm sm:text-lg mb-6 max-w-md sm:max-w-lg line-clamp-3 lg:max-w-lg">
        {overview}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="bg-white text-black py-2 px-8 sm:px-12 text-sm sm:text-xl rounded-lg hover:bg-white/80 transition">
          Play
        </button>
        <button className="bg-gray-500/60 text-white py-2 px-8 sm:px-12 text-sm sm:text-xl rounded-lg hover:bg-gray-500/80 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
