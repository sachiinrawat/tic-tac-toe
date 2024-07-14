import React from "react";

const Block = (props) => {
  return (
    <div className="block" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Block;
