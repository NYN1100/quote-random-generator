import React, { useState } from "react";
import { db } from "../Firebase";
import { addDoc, doc, collection, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const FormPage = ({ quote: existingQuote, author: existingAuthor, id }) => {
  const [quote, setQuote] = useState(existingQuote || "");
  const [author, setAuthor] = useState(existingAuthor || "");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const quotes = {
      quote,
      author,
    };
    if (id) {
      const quoteDocRef = doc(db, "quotes", id);
      try {
        await updateDoc(quoteDocRef, quotes);
        alert("success");
        navigate("/quotes");
      } catch (error) {
        alert(error);
      }
    } else {
      if (quote !== "" && author !== "") {
        await addDoc(collection(db, "quotes"), {
          ...quotes,
        });
        setAuthor("");
        setQuote("");
        alert("ok");
        navigate("/quotes");
      } else {
        alert("Input is empty");
      }
    }
  };
  return (
    <div className="border-2 border-blue-900 bg-blue-400 rounded-md p-5 shadow-2xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <textarea
          value={quote}
          required
          onChange={(e) => setQuote(e.target.value)}
          className="p-5 pb-32 border-2 border-blue-900 rounded-lg"
          placeholder="Write your quote here..."
        ></textarea>
        <input
          value={author}
          className="border-2 p-1 border-blue-900 rounded-md"
          type="text"
          placeholder="Author"
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-900 text-white">Save</button>
      </form>
    </div>
  );
};

export default FormPage;
