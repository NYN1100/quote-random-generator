import axios from "axios";
import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { MoonLoader } from "react-spinners";

const HeroPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState({
    data: {
      quote: "Be the chief but never the lord.",
      author: "Lao Tzu",
    },
  });
  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, "quotes"));
    onSnapshot(q, (querySnapshot) => {
      setQuotes(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      setIsLoading(false);
    });
  }, []);

  const generateRandomQuote = function (arr) {
    let quote = arr.splice((Math.random() * arr.length) | 0, 1)[0];
    setQuote(quote);
    if (quote === undefined) {
      window.location.reload();
    }
  };

  return (
    <div className="mt-32 m-5 flex items-center justify-center">
      <div className="w-[34rem] p-5 rounded-lg  bg-blue-400 shadow-2xl flex flex-col justify-center items-center">
        <div className="p-10 border-b w-full flex flex-col items-center justify-center">
          {isLoading && <MoonLoader />}
          <h3 className="text-lg md:text-2xl">{quote?.data?.quote}</h3>
          <p className="mt-5 text-gray-600">{quote?.data?.author}</p>
        </div>
        <div
          className="px-5 py-2 mt-4 bg-blue-200 rounded-lg text-lg"
          onClick={() => generateRandomQuote(quotes)}
        >
          <button>
            Generate{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
