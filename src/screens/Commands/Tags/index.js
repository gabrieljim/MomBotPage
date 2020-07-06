import React from "react";
import "./styles.css";

const Tags = props => {
  let tags = ["economy", "fun", "info", "mod", "music", "settings", "util"];
  return (
    <div className="tags">
      {tags.map(el => {
        return (
          <button
            className={`tag ${props.selected === el ? "selected" : ""}`}
            value={el}
            key={el}
            id={el}
            onClick={props.handler}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default Tags;
