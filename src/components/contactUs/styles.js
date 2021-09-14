import styled, { keyframes } from "styled-components";

const ContactUsContainer = styled.section`
  background-image: url(${(props) => props.image});
  background-size: cover;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  box-shadow: 12px 0 15px -4px rgb(139 101 64),
    -12px 0 8px -4px rgb(67 46 18 / 73%);
`;

const Title = styled.h3`
color: white;
text-align: center;
width: 260px;
margin-top: 40px;
`;

const slideBanner = keyframes`
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

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(22px) saturate(109%);
  -webkit-backdrop-filter: blur(22px) saturate(109%);
  background-color: rgba(23, 20, 20, 0.53);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  width: 400px;
  margin: 2rem 7rem 2rem;
  animation: ${props => props.isVisible ? slideBanner : ""} 0.8s;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
`;

export { ContactUsContainer, FormContainer, Title };