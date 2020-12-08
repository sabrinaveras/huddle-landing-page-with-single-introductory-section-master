import styled from "styled-components";

// image
import LogoImage from "../../assets/images/logo.svg";

export const Header = styled.section`
  max-width: 1400px;
  padding: 0 20px;
  height: 70px;
  margin-left: auto;
  margin-right: auto;
`

export const Logo = styled.div`
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  width: 200px;
  height: 100px;
  display: flex;
  margin-right: auto;
`