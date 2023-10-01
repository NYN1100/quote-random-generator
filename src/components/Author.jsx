import React, { useEffect, useState } from "react";
import Header from "./Header";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
const AuthorPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const authors = quotes.map((quote) => quote.data.author);
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
  return (
    <>
      <Header />
      <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
        {authors.map((author, i) => (
          <div
            key={i}
            className="w-48 h-48 rounded-md flex items-center justify-center  bg-blue-400"
          >
            <h6 className="text-md mx-6">{author}</h6>
          </div>
        ))}
      </div>
    </>
  );
};

export default AuthorPage;
