import { useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import NavBar from "../src/components/navBar";
import Footer from "../src/components/footer";
import { CssBaseline, Container } from "@material-ui/core";
import theme from "../styles/theme";
import { AppContextProvider } from "../src/hooks/useAppContext";
import { SnackbarProvider } from "notistack";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <AppContextProvider>
        <ThemeProvider theme={theme}>
      <SnackbarProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <NavBar />
          <Container maxWidth={true} style={{padding: '0', boxShadow: '0px 0px 5px 2px black'}} className="containerApp">
            <Component {...pageProps} />
          </Container>
          <Footer />
      </SnackbarProvider>
        </ThemeProvider>
    </AppContextProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
