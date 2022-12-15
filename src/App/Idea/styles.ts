import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "grid",
    placeItems: "center",
    minHeight: "100vh",
    minWidth: "100vw",
    textAlign: "center",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontFamily: "Akshar",
    fontSize: "3rem",
  },
  button: {
    backgroundColor: "#D9D9D9",
    borderRadius: 0,
    fontSize: "1.5rem",
    fontFamily: "Akshar",
    padding: ".75rem 2rem",
    outline: "none",
    border: 0,
    cursor: "pointer",
    transition: "all .3s cubic-bezier(0.65,-0.25,0.25,1.95)",
    "&:hover": {
      letterSpacing: "0.125rem",
    },
  },

  ideaBox: {
    marginTop: "4rem",
    padding: "1rem",
    width: "50%",
    backgroundColor: "#D9D9D9",
    fontFamily: "Akshar",
  },
});
