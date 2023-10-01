import React, { useEffect, useState } from "react";
import Header from "./Header";
import QuoteBox from "./QuoteBox";
import { useParams } from "react-router-dom";
// import { quotes } from "../quotes";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";

const QuotePage = () => {
  const { id } = useParams();
  const [quotes, setQuotes] = useState([]);
  // const[isLoading,setIsLoading]=useState(false)

  useEffect(() => {
    const q = query(collection(db, "quotes"));
    onSnapshot(q, (querySnapshot) => {
      setQuotes(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const quote = quotes.filter((quote) => quote.id === id);
  console.log(quote[0]);
  return (
    <>
      <Header />
      <div className="mt-32 mx-5 flex items-center justify-center">
        <QuoteBox quote={quote[0]} />
      </div>
    </>
  );
};

export default QuotePage;
