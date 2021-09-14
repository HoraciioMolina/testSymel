import styled from "styled-components";

const ItemContainer = styled.div`
flex-direction: column;
text-align: center;
min-height: 130px;
${(props) => props.margin};
`;

export {ItemContainer}
