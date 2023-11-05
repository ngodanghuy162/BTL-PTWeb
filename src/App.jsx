import { useState } from "react";
import "@/styles/globals.scss";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
