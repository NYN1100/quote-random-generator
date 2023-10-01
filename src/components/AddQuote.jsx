import React, { useState } from "react";
import Header from "./Header";
import FormPage from "./Form";

const AddQuotePage = () => {
  return (
    <>
      <Header />
      <div className="m-10 flex flex-col items-center justify-center">
        <h1>Add Quote</h1>
        <FormPage />
      </div>
    </>
  );
};

export default AddQuotePage;
