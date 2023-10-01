import React from "react";

const QuoteBox = ({ quote }) => {
  return (
    <div className="h-[50vh] w-[40vw] rounded-md shadow-xl  text-center bg-blue-300 flex flex-col items-center justify-center">
      <div className="mx-20">
        <p className="text-xl">{quote?.data?.quote}</p>
        <h6 className="text-sm mt-10 text-gray-500">{quote?.data?.author}</h6>
      </div>
    </div>
  );
};

export default QuoteBox;
