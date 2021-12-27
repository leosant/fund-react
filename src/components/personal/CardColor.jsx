import React from "react";

import "./CardColor.css"

export default (props) => {

  return (
    <div className="CardColor">
      <h3>Altera cor dos card</h3>
      <div className="FieldsText">
        <input
          type="text"
          name="numberCard"
          placeholder="Digite o número do card..."
        ></input>
        <button type="submit" value="send">Ok</button>
        <input
          type="text"
          name="colorCard"
          placeholder="Digite a cor que deseja para o card..."
        ></input>
        <button type="submit" value="send">Ok</button>
      </div>
    </div>
  );
};


