import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/Home";
import LoginPage from "./components/Login";
import QuotesPage from "./components/Quotes";
import AuthorPage from "./components/Author";
import QuotePage from "./components/Quote";
import AddQuotePage from "./components/AddQuote";
import EditQuotePage from "./components/EditQuote";
import DeleteQuotePage from "./components/DeleteQuote";
import SignUpPage from "./components/SignUp";
import { AuthContext } from "./components/AuthContext";

const Routers = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={currentUser ? <HomePage /> : <LoginPage />}
      ></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route
        path="/quotes"
        element={currentUser ? <QuotesPage /> : <LoginPage />}
      ></Route>
      <Route
        path="/quotes/:id"
        element={currentUser ? <QuotePage /> : <LoginPage />}
      ></Route>
      <Route
        path="/authors"
        element={currentUser ? <AuthorPage /> : <LoginPage />}
      ></Route>
      <Route
        path="/addquote"
        element={currentUser ? <AddQuotePage /> : <LoginPage />}
      ></Route>
      <Route
        path="/quotes/edit/:id"
        element={currentUser ? <EditQuotePage /> : <LoginPage />}
      ></Route>
      <Route path="/quotes/delete/:id" element={<DeleteQuotePage />}></Route>
    </Routes>
  );
};

export default Routers;
