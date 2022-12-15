import React from "react";
import { useStyles } from "./styles";
import { resourceLists } from "./resourceLists";

export const Resources = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Resources</h1>
        <div>
          {Object.entries(resourceLists).map(([header, sites]) => (
            <>
              <h2 className={classes.subHeader}>{header}</h2>
              <ul>
                {sites.map(({ name, link }) => (
                  <li className={classes.item}>
                    <a href={link} target="_blank" rel="noreferrer">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
