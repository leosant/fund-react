import React from "react";

import If, { Else } from "./If";

export default (props) => {
  const user = props.user || {};

  return (
    <div>
      <If expression={user && user.name}>
        <span>
          nome: {user.name} nota: {user.note} é nerd?{" "}
          {user.isNerd ? "Verdade" : "Falso"}
        </span>
        <Else>
          <div>
            <span>Informação incompleta</span>
          </div>
        </Else>
      </If>
    </div>
  );
};
