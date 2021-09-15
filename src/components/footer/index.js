import { Container } from "@material-ui/core";
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import { ItemContainer} from './styles'
import Image from "next/image";

export default function Footer() {

  const iconStyle = { 
    verticalAlign: "middle",
    marginRight: "4px"
  }

  const itemStyle = { 
    marginTop: "10px",
  }

    return (
      <footer>
        <Container fixed={false} maxWidth={false} className="containerFooter">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              height: "208px",
            }}
          >
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <Image alt="logo" src="/images/logo.png" width="40rem" height="40rem" />
            </div>

            <ItemContainer margin="margin-left: auto">
              <ul style={{ listStyle: "none" }}>
                <li style={{ textTransform: "uppercase" }}>
                  <h4>Atencion al cliente</h4>
                </li>
                <li>
                  <PhoneRoundedIcon style={iconStyle} />
                  0800 33334444
                </li>
                <li style={itemStyle}>
                  <PhoneRoundedIcon style={iconStyle} />
                  02964 5555555
                </li>
              </ul>
            </ItemContainer>

            <ItemContainer margin="margin-right: auto">
              <ul style={{ listStyle: "none" }}>
                <li style={{ textTransform: "uppercase" }}>
                  <h4>Seguinos</h4>
                </li>
                <li>
                  <PhoneRoundedIcon style={iconStyle} />
                  Instagram
                </li>
                <li style={itemStyle}>
                  <PhoneRoundedIcon style={iconStyle} />
                  Facebook
                </li>
              </ul>
            </ItemContainer>
          </div>
        </Container>
      </footer>
    );
}
