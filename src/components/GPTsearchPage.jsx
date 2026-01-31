import { BG_URL } from "../utils/constants";
import GPTmovieSUggestions from "./GPTmovieSUggestions";
import GPTsearchbar from "./GPTsearchbar";

const GPTsearchPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={BG_URL}
          alt="background"
          className="h-full w-full object-cover object-center"
        />
        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-6 px-4 pt-20 sm:px-6 md:px-10">
        <GPTsearchbar />
        <GPTmovieSUggestions />
      </div>
    </div>
  );
};

export default GPTsearchPage;
