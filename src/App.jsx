import React, { useState } from "react";

import First from "./components/basics/First";
import WithParameters from "./components/basics/WithParameters";
import Frag from "./components/basics/Frag";
import Random from "./components/basics/RandomNumber";
import Card from "./components/layout/Card";
import CardColor from "./components/personal/CardColor";
import Family from "./components/basics/Family";
import FamilyChildren from "./components/basics/FamilyChildren";
import ListStudent from "./components/repeat/ListStudent";
import TableProduct from "./components/repeat/TableProduct";
import PairOrOdd from "./components/conditions/PairOrOdd";
import UserInf from "./components/conditions/UserInf";
import DirectFather from "./components/comunication/DirectFather";
import IndirectFather from "./components/comunication/IndirectFather.jsx";
import Input from "./components/form/Input";
import Count from "./components/count/Count";

import "./App.css";

export default (_) => {

  const [number, name] = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    
    [" - Primeiro componente",
     " - Com paramêtros",
     " - Com paramêtros",
     "- Fragmentos",
     " - Número randomico",
     "- Componente com Filhos",
     " - Lista de alunos",
     " - Lista de produtos",
     " - Par ou Impar",
     " - Comunicação direta",
     " - Componentes controlados",
     " - Comunicação indireta",
     " - Contador"
    ],];

  const [colorCard, setColor] = useState("");
  const [numberCard, setNumber] = useState(0);

  function get(color, number) { 
    setColor(color);
    setNumber(number);
  }

  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <CardColor clickButton={get}>
        <div className="Cards">
          <Card title={"#" + number[12] + name[12]} color={number[12] === numberCard ? colorCard : "#8000ff"}>
            <Count numberCount={10} />
          </Card>
          
          <Card title={"#" + number[11] + name[11]} color={number[11] === numberCard ? colorCard : "#adad85"}>
            <Input />
          </Card>

          <Card title={"#" + number[10] + name[10]} color={number[10] === numberCard ? colorCard : "#33ccff"}>
            <IndirectFather />
          </Card>

          <Card title={"#" + number[9] + name[9]} color={number[9] === numberCard ? colorCard : "#111145"}>
            <DirectFather />
          </Card>

          <Card title={"#" + number[8] + name[8]} color={number[8] === numberCard ? colorCard : "#788545"}>
            <PairOrOdd number={20} />
            <UserInf user={{ name: "Leonardo", note: 10, isNerd: true }} />
            <UserInf user={{ note: 2, isNerd: false }} />
          </Card>

          <Card title={"#" + number[7] + name[7]} color={number[7] === numberCard ? colorCard : "#607880"}>
            <TableProduct />
          </Card>

          <Card title={"#" + number[6] + name[6]} color={number[6] === numberCard ? colorCard : "#545890"}>
            <ListStudent />
          </Card>

          <Card title={"#"+ number[5] + name[5]} color={number[5] === numberCard ? colorCard : "#854874"}>
            <Family lastName="Santos">
              <FamilyChildren name="Leonardo" />
              <FamilyChildren name="Emily" />
              <FamilyChildren name="Emanuel" />
            </Family>
          </Card>

          <Card title={"#" + number[4] + name[4]} color={number[4] === numberCard ? colorCard : "#581845"}>
            <Random min={5} max={10} />
          </Card>

          <Card title={"#" + number[3] + name[3]} color={number[3] === numberCard ? colorCard : "#AC0F97"}>
            <Frag />
          </Card>

          <Card title={"#" + number[2] + name[2]} color={number[2] === numberCard ? colorCard : "#000154"}>
            <WithParameters
              Title="Situação do aluno: "
              student="Leonardo"
              note={2.1}
            />
          </Card>

          <Card title={"#" + number[1] + name[1]} color={number[1] === numberCard ? colorCard : "green"}>
            <WithParameters
              id="props"
              Title="Situação do aluno: "
              student="Emily"
              note={9.5}
            />
          </Card>

          <Card title={"#" + number[0] + name[0]} color={number[0] === numberCard ? colorCard : "#fff0"}>
            <First />
          </Card>
        </div>
      </CardColor>
    </div>
  );
};
