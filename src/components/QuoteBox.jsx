import React from "react";

const QuoteBox = ({ quote }) => {
  return (
    <div className="rounded-md shadow-xl  bg-blue-300 flex flex-col items-center justify-center">
      <div className="m-10">
        <p className="text-xl">{quote?.data?.quote}</p>
        <h6 className="text-sm mt-10 text-gray-500">{quote?.data?.author}</h6>
      </div>
    </div>
  );
};

export default QuoteBox;
