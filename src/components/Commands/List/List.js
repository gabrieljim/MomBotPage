import React, { useState } from "react";
import "./List.css";
import Command from "./Command";

const List = props => {
  let [selected, setSelected] = useState(null);
  let commands = props.commands;

  const handleClick = command => {
    setSelected(selected === command ? null : command);
  };

  return (
    <ul className="commandsList">
      {commands.map(command => {
        return (
          <Command
            command={command}
            selected={selected}
            handler={handleClick}
            key={command[0]}
          />
        );
      })}
    </ul>
  );
};

export default List;
