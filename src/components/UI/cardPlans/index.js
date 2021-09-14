import {Card, CardTop, CardBottom, Price, Title, Subtitle} from './styles'

function CardPlans({ title, price}) {

  const onPlansClick = () => {
    console.log("Click.")
  }

  return (
    <Card onClick={() => onPlansClick()}>
      <CardTop>
        <Title>Plan<br/>{title}</Title>
      </CardTop>
      <CardBottom>
        <Price>${price}</Price>
        <Subtitle>Mensuales</Subtitle>
      </CardBottom>
    </Card>
  );
}


export default CardPlans;