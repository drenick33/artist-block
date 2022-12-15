import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    fontFamily: "Akshar",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    width: "100%",
    maxWidth: "1920px",
    height: "100%",
  },
  header: {
    fontFamily: "Akshar",
    fontSize: "4rem",
    lineHeight: "64px",
    fontWeight: 400,
    color: "#486163",
    marginLeft: "5%",
    marginTop: "5%",
  },

  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    maxWidth: "100%",
    height: "auto",
  },

  image: {
    maxWidth: "100%",
    height: "auto",
  },

  idea: {
    fontFamily: "Akshar",
    padding: 0,
    position: "absolute",
    transform: "rotate(8deg)",
    fontWeight: 400,
    lineHeight: "53px",
    color: "#486163",
    height: "18%",
    width: "220px",
    top: "46%",
    left: "39%",
    fontSize: "3rem",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderRadius: "12px",
    textAlign: "start",
    cursor: "pointer",
    transition: "all .3s cubic-bezier(0.65,-0.25,0.25,1.95)",
    "&:hover": {
      letterSpacing: "0.125rem",
    },
    "@media (max-width: 1400px)": {
      left: "35%",
    },
    "@media (max-width: 1000px)": {
      left: "30%",
    },
    "@media (max-width: 750px)": {
      left: "20%",
    },
    "@media (max-width: 500px)": {
      left: "10%",
      fontSize: "2.5rem",
    },
  },
  resources: {
    fontFamily: "Akshar",
    position: "absolute",
    transform: "rotate(-9deg)",
    fontWeight: 400,
    lineHeight: "53px",
    color: "#486163",
    height: "18%",
    width: "250px",
    top: "47%",
    left: "52%",
    fontSize: "3rem",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderRadius: "12px",
    textAlign: "start",
    cursor: "pointer",
    transition: "all .3s cubic-bezier(0.65,-0.25,0.25,1.95)",
    "&:hover": {
      letterSpacing: "0.125rem",
    },
    "@media (max-width: 500px)": {
      left: "55%",
      fontSize: "2.5rem",
    },
  },

  arrow: {
    position: "absolute",
    bottom: 0,
    right: "20%",
    width: "200px",
    height: "150px",
    "@media (max-width: 1100px)": {
      display: "none",
    },
  },

  instructions: {
    position: "absolute",
    bottom: "10%",
    right: 0,
    display: "flex",
    justifyContent: "end",
    marginRight: "5%",
    fontFamily: "sans-serif",
    fontSize: "2rem",
    color: "black",
    lineHeight: "45px",
    "@media (max-width: 1100px)": {
      display: "none",
    },
  },
});
