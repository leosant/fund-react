import React, { useState } from "react";

import InderectChildren from "./InderectChildren";

export default (_) => {
  const [name, setName] = useState("?");
  const [age, setAge] = useState(0);
  const [nerd, setNerd] = useState(false);

  function getAnswers(name, age, nerd) {
    setName(name);
    setAge(age);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        Pai
        <div>
          <span>nome:{name} </span>
          <span>
            idade:<strong>{age} </strong>
          </span>
          <span> nerd:{nerd == true ? "Verdadeiro" : "Falso"}</span>
        </div>
      </div>
      <InderectChildren clickAbout={getAnswers} />
    </div>
  );
};
