import {CartContainer, Title, ColumnsContainer, Column, Row, TextLeft, TextRight, SmallText} from './styles'

function Cart({ title, price, total}) {
  
    return (
        <CartContainer>
            <Title>Total</Title>
            <ColumnsContainer>
                <Column>
                    <Row>
                        <TextLeft>Plan</TextLeft>
                    </Row>
                    <Row>
                        <TextLeft>Costo de instalacion <br/><SmallText>(Por unica vez)</SmallText></TextLeft>
                    </Row>
                    <Row>
                        <TextLeft>Costo total</TextLeft>
                    </Row>
                </Column>
                <Column>
                    <Row>
                        <TextRight>plan 123123</TextRight>
                    </Row>
                    <Row>
                        <TextRight>$1500</TextRight>
                    </Row>
                    <Row>
                        <TextRight>total</TextRight>
                    </Row>
                </Column>

            </ColumnsContainer>
        </CartContainer>
    );
  }
  
  
  export default Cart;