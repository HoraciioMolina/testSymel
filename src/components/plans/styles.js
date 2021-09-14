import styled from "styled-components";

const PlansContainer = styled.section`
  background-image: url(${(props) => props.image});
  background-repeat: repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  box-shadow: 12px 0 15px -4px rgb(1 74 134 / 80%),
    -12px 0 8px -4px rgb(3 43 92 / 80%);
`;


const Title = styled.h1`
  margin: 50px 0px 0px 0px;
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
`;

const GlowText = styled.h2`
  font-size: 1.7rem;
  
  color: #fff;
  text-shadow:  0 0 7px #fff,
  0 0 10px #fff,
  0 0 21px #fff,
  0 0 42px #00c9c0,
  0 0 82px #00c9c0,
  0 0 92px #00c9c0,
  0 0 102px #00c9c0,
  0 0 151px #00c9c0;
`
const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 40px;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Button = styled.button`
  width: 250px;
  margin: 20px 0px 50px 0px;
  border-radius: 50px;
  border: 3px solid white;
  cursor: pointer;
  background-color: transparent;
  color: white;
  height: 50px;
  font-size: 1rem;
  font-weight: bold;

   &:hover,
     &:focus, &:active {
       border: 3px solid #00c9c0;
       color:white;
   }
`;



export {PlansContainer, Wrap, Title, GlowText, Subtitle, Button };