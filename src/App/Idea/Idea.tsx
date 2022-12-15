import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { sample } from "lodash";
import { objects, styles, medias } from "./ideas";

interface Result {
  object: string;
  style: string;
  media: string;
}

export const Idea = () => {
  const classes = useStyles();
  const [idea, setIdea] = useState<Result>();

  const generateIdea = () => {
    const object = sample(objects) ?? "";
    const style = sample(styles) ?? "";
    const media = sample(medias) ?? "";
    const newObject = { object, style, media };
    setIdea(newObject);
  };

  useEffect(() => {
    generateIdea();
  }, []);

  if (!idea) return <p>loading...</p>;

  const { object, style, media } = idea;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.header}>Ideas Generator</h1>
        <button onClick={generateIdea} className={classes.button}>
          Tap to generate !
        </button>
        <div className={classes.ideaBox}>
          <h2>Object: {object}</h2>
          <h2>Style: {style}</h2>
          <h2>Media: {media}</h2>
        </div>
      </div>
    </div>
  );
};
