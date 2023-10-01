import React, { useEffect, useState } from "react";
import Header from "./Header";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { MoonLoader } from "react-spinners";
import FormPage from "./Form";
import { useParams } from "react-router-dom";
const EditQuotePage = () => {
  const { id } = useParams();
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
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
  const data = quotes.filter((quote) => quote.id === id)[0]?.data;
  const quote = data?.quote;
  const author = data?.author;
  return (
    <>
      <Header />

      {isLoading && <MoonLoader size={100} />}
      {quote && author && (
        <div className="m-20 flex flex-col items-center justify-center">
          <h1>Edit Quote</h1>
          <FormPage author={author} quote={quote} id={id} />
        </div>
      )}
    </>
  );
};

export default EditQuotePage;
