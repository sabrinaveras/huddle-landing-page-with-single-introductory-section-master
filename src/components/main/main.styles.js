import styled from "styled-components";

import Image from "../../assets/images/illustration-mockups.svg";

export const Main = styled.section`
    max-width: 1400px;
    padding: 0 20px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 140px);
  display: flex;
  
  @media screen and (max-width: 801px){
    display: block;
    height: auto;
  }
`

export const ImageContainer = styled.div`
    
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  
    div{
      width: 100%;
      height: 50%;
      background-image: url(${Image});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      display: flex;
      margin-left: auto;
      margin-right: auto;
    }

    @media screen and (max-width: 801px){   
      width: 100%;
      
      div{
        height: 26rem;
      }
    }
`

export const InformationContainer = styled.div`

  width: 50%;
  height: auto;

  margin: auto;
  display: block;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    color: #FFF;
    margin-bottom: 20px;
    margin-left: 50px;
  }

  h2 {
    font-family: 'Open Sans', sans-serif;
    color: #FFF;
    margin-bottom: 20px;
    margin-left: 50px;
  }

  button {
    background-color: #FFF;
    border-radius: 25px;
    border: none;
    padding: 15px 50px;
    margin-left: 50px;

    color: hsl(257, 40%, 49%);
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;

    &:hover {
      background-color: hsl(300, 69%, 71%);
      color: #FFF;
    }
    
    &:focus{
      outline: none;
      box-shadow: none;
    }

  }

  @media screen and (max-width: 801px){
    width: 100%;
    
    h1{
        margin-left: 0;
        text-align: center;
    }
    
    h2{
        margin-left: 0;
        text-align: center;
    }
    
    button{
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        display: flex;
    }
  }
`