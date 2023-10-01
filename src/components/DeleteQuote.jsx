import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Firebase";

const DeleteQuotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState([]);

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

  const handleDelete = async () => {
    const quoteDocRef = doc(db, "quotes", id);
    try {
      await deleteDoc(quoteDocRef);
      navigate("/quotes");
      alert("Deleted");
    } catch (error) {
      alert(error);
    }
  };

  const goBack = () => {
    navigate("/quotes");
  };

  const data = quotes.filter((quote) => quote.id === id)[0]?.data;
  const author = data?.author;
  return (
    <>
      <Header />
      <div className="m-20 flex flex-col items-center justify-center">
        <h1>Do you really want to delete &quot;{author}'s quoute&quot;</h1>
        <div className="flex text-3xl gap-10">
          <button className="btn btn-delete" onClick={handleDelete}>
            YES
          </button>
          <button className="btn btn-edit" onClick={goBack}>
            NO
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteQuotePage;
