import React from "react";

export default (props) => {
  return (
    <>
      <button onClick={ (_) => props.clickButton() }>{props.children}</button>
    </>
  );
};
