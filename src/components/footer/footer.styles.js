import styled from "styled-components";


export const Footer = styled.section`
    max-width: 1400px;
    padding: 0 20px;
    height: 70px;
    margin-left: auto;
    margin-right: auto;
    justify-content: flex-end;
    display: flex;
    
    @media screen and (max-width: 801px){
      justify-content: center;
      margin-top: 20px;
    }
`

export const SocialNetworks = styled.div`
    width: 30px;
    height: 30px;
    margin-left: 10px;
    border: 1px solid #FFF;
    border-radius: 50%;
    padding: 5px;
    position: relative;
  
    svg{
        width: 20px;
        height: 20px;
        overflow: auto;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        
        .cls-1 {
          fill: #FFF;
        }
    }

    &:hover{
        border: 1px solid hsl(300, 69%, 71%);
        
        svg{
            .cls-1{
              fill: hsl(300, 69%, 71%);
            }
        }
    }
`