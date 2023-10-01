import React from "react";
import Header from "./Header";
import FormAuth from "./FormAuth";

const SignUpPage = () => {
  return (
    <>
      <Header />
      <div className="mt-20 flex flex-col items-center justify-center">
        <FormAuth h={"SignUp"} />
      </div>
    </>
  );
};

export default SignUpPage;
