import React, { useContext, useState } from "react";
import Header from "./Header";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Success");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Email or password is incorrect");
      });
  };

  return (
    <>
      <Header />
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="p-10 bg-blue-400 rounded-md shadow-2xl">
          <h1>Login</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-7"
          >
            <input
              size={30}
              className="p-2 rounded-md"
              type="email"
              value={email}
              placeholder="Write your email"
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            <input
              size={30}
              value={password}
              className="p-2 rounded-md"
              type="password"
              placeholder="Write your password"
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            <button className="btn btn-submit">Save</button>
          </form>
          <p className="mt-4">
            Not Signed Up?
            <button
              onClick={() => navigate("/signup")}
              className="block
         text-white"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
