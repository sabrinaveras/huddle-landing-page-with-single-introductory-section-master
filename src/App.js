import React from "react";
import styled from "styled-components";

// components
import HeaderComponent from "./components/header/header.component";
import MainComponent from "./components/main/main.component";
import FooterComponent from "./components/footer/footer.component";

// images
import backgroundImage from "./assets/images/bg-desktop.svg";
import backgroundImageMobile from "./assets/images/bg-mobile.svg";

// styles
import "./index.css"

const Container = styled.section`
  margin: 0;
  padding: 0;
        
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: hsl(257, 40%, 49%);

  position: relative;
  
  @media screen and (max-width: 659px){
    background-image: url(${backgroundImageMobile});
    height: auto;
  }
`


function App() {
  return (
    <Container>

      <HeaderComponent/>

      <MainComponent/>

      <FooterComponent/>

    </Container>
  );
}

export default App;
