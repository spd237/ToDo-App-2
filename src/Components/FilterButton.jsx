import React from "react";

export default function FilterButton(props) {
  return (
    <button
      className="filter-all"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </button>
  );
}
