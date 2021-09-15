import { makeStyles } from "@material-ui/core/styles";
import { Container, AppBar, IconButton, ButtonGroup } from "@material-ui/core";
import Button from "../UI/button/index"
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import useAppContext from "../../hooks/useAppContext";
import Box from '@material-ui/core/Box';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      marginLeft: "25%",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const { isLoggedIn, setIsLoggedIn } = useAppContext();

  const onLogoutClick = () => {
  };


  const iconStyle = { 
    verticalAlign: "middle",
    marginRight: "4px"
  }


  return (
    <AppBar position="sticky">
      <Container fixed={false} maxWidth={false} className="containerNavBar">
        {/* <IconButton className={classes.menuButton}>
          <MenuIcon />
        </IconButton>*/}
        <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <div>
            <ul style={{listStyle: "none"}}>
              <li><LanguageIcon style={iconStyle}/> Conoce mas de nuestro Internet con Fibra optica</li>
            </ul>
          </div>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <img alt="" src="./images/logo.png" width={'80%'} />
          </div>
          <ButtonGroup
            width={190}
            variant="text"
            color="primary"
            aria-label="text primary button group"
            style={{ marginLeft: "auto" }}
          >
            <Button text="Contacto" />
          </ButtonGroup>
        </div>
        {/* <IconButton onClick={() => console.log(isLoggedIn)}>
            <ExitToAppIcon />
          </IconButton> */}
      </Container>
    </AppBar>
  );
};

export default NavBar;
