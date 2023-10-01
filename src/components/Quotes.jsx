import React, { useEffect, useState } from "react";
import Header from "./Header";
// import { quotes } from "../quotes";
import { useNavigate } from "react-router-dom";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { MoonLoader } from "react-spinners";
const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div>
        <div className="p-10 mx-10  rounded-md">
          <div className="flex flex-col items-center justify-center">
            <button
              className=" px-8 py-4 rounded-sm bg-blue-800 text-white border-black mb-2"
              onClick={() => navigate("/addquote")}
            >
              Add quote
            </button>
            {isLoading && <MoonLoader size={100} color="#60a5fa" />}
            <div
              className="grid grid-cols-1 gap-2
            "
            >
              {quotes.map((quote) => (
                <div
                  key={quote.id}
                  className="p-5 bg-blue-400  text-center rounded-sm border  shadow-xl"
                >
                  <h6>{quote.data.quote}</h6>
                  <p className="text-gray-100">{quote.data.author}</p>
                  <div className="text-right flex items-center  justify-end gap-2">
                    <button
                      onClick={() => navigate("/quotes/edit/" + quote.id)}
                      className="btn btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => navigate("/quotes/delete/" + quote.id)}
                      className="btn btn-delete"
                    >
                      Delete
                    </button>
                    <button
                      className="btn"
                      onClick={() => navigate("/quotes/" + quote.id)}
                    >
                      View full &#x2192;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotesPage;
