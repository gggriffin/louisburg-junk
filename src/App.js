import React from "react";
import { FullWidthContainer } from "./components/FullWidthContainer/FullWidthContainer";
import "./index.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
//wrap Router around relevant components

function App() {
  return (
    <FullWidthContainer>
      <Header />
      <Footer />
    </FullWidthContainer>
  );
}

export default App;
