import React from "react";
import { FullWidthContainer } from "./components/FullWidthContainer/FullWidthContainer";
import "./index.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Body } from "./components/Body/Body";
//wrap Router around relevant components if building multi page app

function App() {
  return (
    <FullWidthContainer>
      <Header />
      <Body/>
      <Footer />
    </FullWidthContainer>
  );
}

export default App;
