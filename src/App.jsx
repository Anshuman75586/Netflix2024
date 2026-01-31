import Header from "./components/Header";

import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userslice";
import Footer from "./components/Footer";
import SmoothScroll from "./SmoothScroll";

function Applayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <SmoothScroll>
        <Header />
        <Outlet />
      </SmoothScroll>
    </div>
  );
}

export default Applayout;
