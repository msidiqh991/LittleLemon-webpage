import React, { useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main"
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    document.title = "Little Lemon App"
  }, [])

  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Menu/>
      <Footer/>
    </>
  );
}

export default App;
