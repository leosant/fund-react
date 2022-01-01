import React, { useState } from "react";

import "./Input.css";

export default (props) => {
  const [value, setValue] = useState("Inicial");

  function whenChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <h2>{value}</h2>
      <div className="Input">
        <div>
          <span className="text">Alterações</span>
          <input value={value} onChange={whenChange} />
        </div>
        <div>
          <span className="text">Somente leitura</span>
          <input value={value} readOnly />
        </div>
      </div>
    </div>
  );
};
