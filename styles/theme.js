import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { esES } from "@material-ui/core/locale";
import { BorderRight } from "@material-ui/icons";

const colorDegradado = "linear-gradient(0.25turn, #111121, #C0FEFC)";
const primaryColor = "#111121";
const secundaryColor = "#cccc";
const badgeColor = "linear-gradient(0.25turn, #f10707f7, #0606068c)";
const iconButtonColor = "white";

const blackGrayDeg = "linear-gradient(0.25turn, #0e0e0e, #353535)";

const containerHeight = "100vh";
const containerMaxWidth = "95vw";

// Create a theme instance.
const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secundaryColor,
      },
      error: {
        main: red.A400,
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: blackGrayDeg,
              borderRadius: "8px",
              boxShadow: "inset 0px 0px 2px 0px darkgrey",
            },
            backgroundColor: "#6f54541a",
            padding: 0,
            margin: 0,
            fontFamily: [
              "-apple-system",
              "BlinkMacSystemFont",
              '"Segoe UI"',
              "Roboto",
              '"Helvetica Neue"',
              "Arial",
              "sans-serif",
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(","),
          },
          footer: {
            background: blackGrayDeg,
            color: iconButtonColor,
          },
        },
      },
      MuiContainer: {
        root: {
          minHeight: containerHeight,
          maxWidth: containerMaxWidth,
          "&.containerApp": {
            background: "white",
            boxShadow: "0px 0px 15px 1px rgb(121 131 134 / 27%)",
          },
          "&.containerFooter": {
            minHeight: "13rem",
            display: "flex",
            flexDirection: "column",
          },
          "&.containerNavBar": {
            minHeight: "4rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
          "& .MuiFilledInput-root": {
            background: "white",
          },
        },
      },
      MuiBadge: {
        badge: {
          background: badgeColor,
        },
      },
      MuiIconButton: {
        root: {
          color: iconButtonColor,
        },
      },
      MuiButton: {
        root: {
          borderRadius: "3px",
          margin: "1rem",
          textTransform: "uppercase",
          color: iconButtonColor,
          position: "relative",
          "&$disabled": {
            background: secundaryColor,
          },
        },
        text: {
          padding: "0.5rem 1.5rem",
        },
      },
      MuiCircularProgress: {
        root: {
          position: "absolute",
        },
        colorPrimary: {
          color: primaryColor,
        },
      },
      MuiAppBar: {
        root: {
          background: blackGrayDeg,
        },
      },
      MuiAvatar: {
        root: {
          cursor: "pointer",
        },
      },
      MuiInputBase: {
        root: {
          background: "transparent !important",
        },
      },
      MuiInputLabel: {
        root: {
          color: "#f08a30ab",
          "&.Mui-focused": {
            color: "#f08a30ab",
          },
          "&.Mui-error": {
            color: "#ff1744",
          },
        },
      },
      MuiTextField: {
        root: {
          background: "transparent",
        },
      },
      MuiFilledInput: {
        underline: {
          "&:hover": {
            "&::before": {
              borderBottom: "1px solid #fa9f4f",
            },
          },
          "&::before": {
            borderBottom: "1px solid #f08a30",
          },
          "&::after": {
            borderBottomColor: "#f08a30",
          },

          color: "white",
        },
      },
    },
  },
  esES
);

export default theme;
