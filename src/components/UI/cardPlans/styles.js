import styled from "styled-components";

const CardTop = styled.div`
background-color: #ffffff;
color: black;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px 5px 0px 0px;
`;

const Card = styled.article`
display: flex;
flex-direction: column;
color: white;
width: 250px;
height: 200px;
text-align: center;
border: 3px solid white;
margin: 10px 20px;
border-radius: 15px;
cursor: pointer;


&:hover,
  &:focus, &:active {
    border: 3px solid  #00c9c0;
    color:white;
}

&:hover, &:focus, &:active {

    ${CardTop}{
        background-color: #00c9c0;
        color: white;
    }
}
`;

const CardBottom = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
height: 110px;
font-size: 1.8rem;
`;

const Title = styled.span`
font-size: 1.5rem;
font-weight: bold;
`;


const Price = styled.span`
font-weight: bold;
`;

const Subtitle = styled.span`
color: #F08A30;
`;


export {Card, CardTop, CardBottom, Price, Title, Subtitle}
