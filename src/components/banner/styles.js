import styled, { keyframes } from "styled-components";




const BannerContenier = styled.div`
  position: relative;
  display: flex;
  line-height: 2rem;
  transition: 0.5s;
  box-shadow: 12px 0 15px -4px rgb(78 62 44), -12px 0 8px -4px rgb(61 46 32);
`;



const TextContainer = styled.div`
  position: absolute;
  width: 100%;

  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  backdrop-filter: brightness(0.4) blur(3px);
  height: 100%;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 45%;
  text-align: center;
  color: white;

  font-size: xx-large;
  font-weight: inherit;

  & span {
    text-align: right;

    font-size: xxx-large;
    font-weight: bold;
  }

  ${(props) =>
    !props.visible
      ? `transform: translateY(20px) scale(0.9);
    opacity: 0;`
      : `visibility: visible;
    -webkit-transform: translateY(0) scale(1);
    opacity: 1;
    transform: translateY(0) scale(1);
    opacity: 1;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
    transition: transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;`}
`;



const ListItems = styled.ul`
  color: white;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding-right: 3rem;

  ${(props) =>
    !props.visible
      ? `transform: translateY(20px) scale(0.9);
    opacity: 0;`
      : `visibility: visible;
    -webkit-transform: translateY(0) scale(1);
    opacity: 1;
    transform: translateY(0) scale(1);
    opacity: 1;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
    transition: transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;`}
`;

export {BannerContenier, Title, ListItems, TextContainer };