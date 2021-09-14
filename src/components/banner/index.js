import React, { useRef } from 'react'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LanguageIcon from '@material-ui/icons/Language';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { BannerContenier, Title, ListItems, TextContainer } from "./styles";
import useOnScreen from '../../hooks/useOnScreen';
import { Backdrop } from '@material-ui/core';

const iconStyle = { 
  color: "#F08A30",
  verticalAlign: "middle",
  marginRight: "8px"
}

const itemStyle = { 
  marginTop: "10px",
}

const Banner = (props) => {

  const ref = useRef();
  const isVisible = useOnScreen(ref);

    return (
      /*  <video playsinline autoplay muted loop id="bgvid">
        <source src={Video} type="video/mp4"/>
      </video> */
      <BannerContenier style={{ position: "relative" }}>
        <video
          autoPlay
          loop
          src="./images/video.mp4"
          style={{ width: "100%" }}
          muted
        />
        <TextContainer>
          <Title ref={ref} visible={isVisible}>
            <span>Llegamos</span>
            para
            <br />
            conectarte
            <span> al mundo</span>
          </Title>
          <ListItems visible={isVisible}>
            <li>
              <LocalOfferIcon style={iconStyle} /> Precios al alcance de toda la
              comunidad
            </li>
            <li>
              <LanguageIcon style={iconStyle} />
              Nos enfocamos 100% en el internet de tu hogar o empresa
            </li>
            <li>
              <CheckBoxIcon style={iconStyle} />
              Internet por fibra optica seguro y de calidad
            </li>
          </ListItems>
        </TextContainer>
      </BannerContenier>
    );
}

export default Banner;
