import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

const navItemsLoggedIn = [
  {
    title: "All Quotes",
    route: "/quotes",
  },
  {
    title: "Authors",
    route: "/authors",
  },
];

const navItemsLoggedOut = [
  {
    title: "SignUp",
    route: "/signup",
  },
  {
    title: "Login",
    route: "/login",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const signOutAccount = () => {
    signOut(auth)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };
  return (
    <div className="flex justify-around items-center p-5 bg-blue-500  h-[10vh]">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <h3 className="md:text-2xl">Quote Random Generator</h3>
      </div>
      <div className="flex gap-5">
        {currentUser === null &&
          navItemsLoggedOut.map((nav, i) => (
            <nav onClick={() => navigate(nav.route)} key={i}>
              {nav.title}
            </nav>
          ))}
        {currentUser !== null &&
          navItemsLoggedIn.map((nav, i) => (
            <nav onClick={() => navigate(nav.route)} key={i}>
              {nav.title}
            </nav>
          ))}
        {currentUser !== null && <nav onClick={signOutAccount}>Sign Out</nav>}
      </div>
    </div>
  );
};

export default Header;
