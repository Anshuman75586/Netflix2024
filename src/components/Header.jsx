import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userslice";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GPTslice";
import { ChangeLanguage } from "../utils/configSlice";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.config.lang);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    dispatch(ChangeLanguage(e.target.value));
  };

  const handleGPTSearchclick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
      })
      .catch((error) => console.error("Sign-out error:", error));
  };

  return (
    <header className="fixed top-0 left-0 w-screen px-4 sm:px-8 py-3 bg-gradient-to-b from-black z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img className="w-28 sm:w-40" src={LOGO} alt="logo" />

        {/* Desktop Menu */}
        {user && (
          <div className="hidden sm:flex items-center gap-4">
            {showGptSearch && (
              <select
                className="p-2 bg-gray-900 text-white rounded-md text-sm"
                onChange={handleLanguageChange}
                value={langKey}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={handleGPTSearchclick}
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <img
              className="w-10 h-10 rounded-full"
              src={USER_ICON}
              alt="user"
            />
            <button onClick={handleSignOut} className="font-bold text-white">
              Sign Out
            </button>
          </div>
        )}

        {/* Mobile Hamburger */}
        {user && (
          <button
            className="sm:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && user && (
        <div className="sm:hidden mt-2 w-full bg-black/90 p-4 flex flex-col gap-3 rounded-b-lg shadow-lg z-50">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white rounded-md text-sm w-full"
              onChange={handleLanguageChange}
              value={langKey}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearchclick}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 w-full"
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src={USER_ICON}
              alt="user"
            />
            <button onClick={handleSignOut} className="font-bold text-white">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
