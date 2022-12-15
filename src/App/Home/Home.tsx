import React from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./styles";

export const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const navigateTo = (to: string) => {
    navigate(to);
  };

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>How can we help?</h1>
        <div className={classes.container}>
          <img src="images/cube.png" alt="cube" className={classes.image} />
          <button onClick={() => navigateTo("/idea")} className={classes.idea}>
            <span>
              Give me
              <br />
              an idea !
            </span>
          </button>
          <button
            onClick={() => navigateTo("/resources")}
            className={classes.resources}
          >
            <span>
              Give me
              <br />
              resources !
            </span>
          </button>
          <img src="images/arrow.png" alt="arrow" className={classes.arrow} />
          <h2 className={classes.instructions}>Click on one !</h2>
        </div>
      </div>
    </div>
  );
};
