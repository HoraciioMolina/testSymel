import React from 'react'
import {PlansContainer, Wrap, Title, GlowText, Subtitle, Button} from './styles'
import CardPlans from '../UI/cardPlans/index'
import Cart from "../UI/cart/index"
const Plans = (props) => {
    return (
        <PlansContainer image="./images/backgroundPlans.png">
          <Title>Proba nuestra<br/>fibra optica</Title>
          <GlowText>Pasate a Symel</GlowText>
          <Subtitle>Elegi un plan</Subtitle>
          <Wrap>
            <CardPlans title="4 megas" price={2000}/>
            <CardPlans title="6 megas" price={2500}/>
            <CardPlans title="10 megas" price={3500}/>
            <CardPlans title="20 megas" price={4000}/>
          </Wrap>
          <Cart/>
          <Button>Contratar</Button>

        </PlansContainer>
    );
}

export default Plans
