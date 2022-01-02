import React, {useState} from "react";

import "./CardColor.css";

export default (props) => {

  const [numberCard, setNumberCard] = useState('');
  const [colorCard, setColorCard] = useState('');

  function whenChangeNumber(e) {
    setNumberCard(e.target.value);
    
  }
  function whenChangeColor(e) {
    setColorCard(e.target.value);
  }
    
  return (
    <div>
      <div className="CardColor">
        <h3>Altera cor dos card</h3>
        <div className="FieldsText">

          <input
            name="numberCard"
            placeholder="Digite o número do card..."
            value={numberCard}
            onChange={whenChangeNumber}
          ></input>

          <input
            name="colorCard"
            placeholder="Digite a cor que deseja para o card..."
            value={colorCard}
            onChange={whenChangeColor}
          ></input>

          <button className="ButtonSend" onClick={_=> props.clickButton(colorCard, numberCard)}>
            Enviar
          </button>

        </div>

      </div>

      <div>{props.children}</div>
    </div>
  );
};
