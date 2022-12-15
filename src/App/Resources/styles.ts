import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "24px",
  },
  header: {
    color: "#486163",
    fontFamily: "Akshar",
    fontStyle: "normal",
    fontSize: "3.5rem",
    lineHeight: "4rem",
  },
  subHeader: {
    color: "black",
    fontFamily: "Akshar",
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    marginLeft: "24px",
    marginBottom: "12px",
  },
  item: {
    textDecoration: "none",
    listStyle: "none",
    marginLeft: "42px",
    // marginBottom: "8px",
    color: "black",
    "& > a": {
      color: "#486163",
      textDecoration: "none",
      textTransform: "capitalize",
      fontFamily: "Akshar",
      "&:hover": {
        color: "black",
      },
    },
  },
});
