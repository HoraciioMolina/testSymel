import styled, { keyframes } from "styled-components";

const slideCardContainer = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100px, 0, 0);
    transform: translate3d(100px, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;

const CardContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  width: 350px;
  text-align: center;
  height: 60%;
  margin: 40px 0px;
  animation: ${(props) => (props.isVisible ? slideCardContainer : "")} ${(props) => props.animationTime ? props.animationTime : '0.3s'};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;

const CardTop = styled.div`
min-height: 140px;
`;

const CardBottom = styled.div`
min-height: 200px;
`;
const Title = styled.h2`
margin: 45px 0px 5px 0px;
text-transform: uppercase;
`;

export { CardContainer, Title, CardTop, CardBottom};