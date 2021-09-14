import styled from "styled-components";

const HomeContainer = styled.div`  
  min-height: 100vh;
`;

const ImagePlanes = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  height: 30em;
  width: 100%;
`;

export { HomeContainer, ImagePlanes };