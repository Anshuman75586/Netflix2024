import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userslice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSigninForm, SetisSigninForm] = useState(true);
  const [errorMessge, SetErrorMessge] = useState(null);
  const [passwordTip, setPasswordTip] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const handlePasswordChange = () => {
    if (isSigninForm) return;
    const value = password.current.value;
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    if (!strongRegex.test(value)) {
      setPasswordTip(
        "Password must be 8-16 chars, include uppercase, lowercase, number & special char.",
      );
    } else {
      setPasswordTip("Strong password ✅");
    }
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    SetErrorMessge(message);
    if (message) return;

    if (!isSigninForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              navigate("/browse");
            })
            .catch((error) => SetErrorMessge(error.message));
        })
        .catch((error) => SetErrorMessge(error.code + " - " + error.message));
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then(() => navigate("/browse"))
        .catch((error) => SetErrorMessge(error.code + " - " + error.message));
    }
  };

  const ToggleSignInForm = () => {
    SetisSigninForm(!isSigninForm);
    setPasswordTip("");
    SetErrorMessge(null);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background */}
      <img
        src={BG_URL}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Form Container */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 w-full max-w-md p-8 bg-black/80 rounded-2xl shadow-2xl flex flex-col gap-4 text-white"
      >
        <h1 className="text-2xl font-bold text-center">
          {isSigninForm ? "Sign In" : "Create Account"}
        </h1>

        {!isSigninForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        {/* Password tip */}
        {!isSigninForm && passwordTip && (
          <p className="text-yellow-400 text-sm">{passwordTip}</p>
        )}

        {/* Error Message */}
        {errorMessge && (
          <p className="text-red-500 font-medium text-sm">{errorMessge}</p>
        )}

        <button
          type="button"
          onClick={handleButtonClick}
          className="w-full py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold text-white transition"
        >
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          onClick={ToggleSignInForm}
          className="text-center text-sm text-gray-300 cursor-pointer hover:text-white transition"
        >
          {isSigninForm
            ? "New to Nomzy? Sign Up Now"
            : "Already registered? Sign In"}
        </p>

        {/* DISCLAIMER */}
        <p className="text-xs text-gray-400 mt-4 text-center">
          ⚠️ This is a **project clone for learning/demo purposes only**. No
          real service or account is provided.
        </p>
      </form>
    </div>
  );
};

export default Login;
