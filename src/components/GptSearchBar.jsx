import { useSelector } from "react-redux";
import Lang from "../utils/languageConstant";

const GPTsearchbar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="w-full flex justify-center px-4 pt-16">
      <form
        className="
          w-full
          max-w-md
          bg-black/80
          backdrop-blur
          rounded-xl
          p-3
          flex
          gap-2
          sm:max-w-xl
          md:max-w-2xl
        "
      >
        <input
          type="text"
          placeholder={
            Lang[langKey]?.gptSearchPlaceHolder ||
            "What would you like to watch today?"
          }
          className="
            flex-1
            rounded-lg
            px-3
            py-2.5
            text-sm
            bg-white
            outline-none
            focus:ring-2
            focus:ring-red-600
          "
        />

        <button
          type="submit"
          className="
            rounded-lg
            px-4
            py-2.5
            text-sm
            font-medium
            bg-red-700
            text-white
            active:scale-95
            transition
          "
        >
          {Lang[langKey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GPTsearchbar;
