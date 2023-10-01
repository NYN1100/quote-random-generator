import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { auth } from "../Firebase";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const FormAuth = ({ h }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // if (currentUser) {
  //   navigate("/");
  // }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert("Signed In");
          navigate("/login");
          // // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
          alert(errorMessage);
        });
    } else {
      alert("Please write your email or password");
    }
  };
  return (
    <div className="p-10 bg-blue-400 rounded-md shadow-2xl">
      <h1>{h}</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-7"
      >
        <input
          size={30}
          className="p-2 rounded-md"
          type="email"
          placeholder="Write your email"
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <input
          size={30}
          className="p-2 rounded-md"
          type="password"
          placeholder="Write your password"
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <button className="btn btn-submit">Save</button>
      </form>
      <p className="mt-4">
        Already have an account?
        <button
          onClick={() => navigate("/login")}
          className="block
         text-white"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default FormAuth;
