import React from "react";

const Command = props => {
  let allowed = ["name", "description", "usage"];
  const command = props.command;

  const markdown = str => {
    let toMark = str.match(/`(.*?)`/g);
    if (toMark)
      toMark.forEach(r => {
        str = str.replace(r, `<pre>${r.replace(/`/g, "")}</pre>`);
      });
    return str;
  };

  return (
    <li
      className={`command ${props.selected === command[0] ? "active" : ""}`}
      onClick={() => props.handler(command[0])}
      key={command[0]}
      id={command[0]}
      tabIndex="0"
      role="button"
    >
      <div className="name">
        <h2>{command[0]}</h2>
        <div className="description">
          <ul>
            {Object.keys(command[1]["help"]).map(detail => {
              if (allowed.includes(detail))
                return (
                  <li key={`${command}-${detail}`} className="detail">
                    <b>{`${detail}: `}</b>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: markdown(command[1]["help"][detail])
                      }}
                    />
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Command;
