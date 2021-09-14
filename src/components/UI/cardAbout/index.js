import { useRef } from "react";
import useOnScreen from "../../../hooks/useOnScreen";
import {CardContainer, CardTop, CardBottom, Title} from "./style"

function CardAbout({ title, text, icon, animationTime }) {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <CardContainer
      ref={ref}
      isVisible={isVisible}
      animationTime={animationTime}
    >
      <CardTop>
        {icon}
        <Title>{title}</Title>
      </CardTop>
      <CardBottom>
        <p>{text}</p>
      </CardBottom>
    </CardContainer>
  );
}

export default CardAbout;