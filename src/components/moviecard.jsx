import { IMG_CDN_URL } from "../utils/constants";

const Moviecard = ({ posterPath }) => {
  return (
    <div className="w-full h-full aspect-[4/5] rounded-lg overflow-hidden shadow-lg bg-gray-800">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="movie card"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Moviecard;
