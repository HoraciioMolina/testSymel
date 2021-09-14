import styled from "styled-components";

const CartContainer = styled.div`
    display: flex;
    border: 3px solid  #00c9c0;
    border-radius: 15px;
    width: 500px;
    height: 260px;
    flex-direction: column;
    margin: 35px;
`;

const Title = styled.span`
    text-align: center;
    color: #F08A30;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 20px;
`;

const ColumnsContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
    font-size: 18px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    min-height: 50px;
    justify-content: space-evenly;
`;

const TextLeft = styled.span`
    text-align: right;
    margin-right: 40px;
    line-height: 17px
`;

const TextRight = styled.span`
    text-align: left;
    margin-left: 40px;
`;

const SmallText = styled.span`
    font-size: 14px;
    margin-top: 0px
`;

export {CartContainer, Title, ColumnsContainer, Column, Row, TextLeft, TextRight, SmallText}