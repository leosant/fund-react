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

import "./App.css";

export default (_) => {
  const [number, name] = [
    [11, 10],
    [" - Componentes controlados", "test"],
  ];

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
          <Card title={number[0] + name[0]} color={number[0] == numberCard ? colorCard : "#adad85"}>
            <Input />
          </Card>

          <Card title="#10 - Comunicação indireta" color="#33ccff">
            <IndirectFather />
          </Card>

          <Card title="#09 - Comunicação direta" color="#111145">
            <DirectFather />
          </Card>

          <Card title="#08 - Par ou Impar" color="#788545">
            <PairOrOdd number={20} />
            <UserInf user={{ name: "Leonardo", note: 10, isNerd: true }} />
            <UserInf user={{ note: 2, isNerd: false }} />
          </Card>

          <Card title="#07 - Lista de produtos" color="#607880">
            <TableProduct />
          </Card>

          <Card title="#06 - Lista de alunos" color="#545890">
            <ListStudent />
          </Card>

          <Card title="#05 - Componente com Filhos" color="#854874">
            <Family lastName="Santos">
              <FamilyChildren name="Leonardo" />
              <FamilyChildren name="Emily" />
              <FamilyChildren name="Emanuel" />
            </Family>
          </Card>

          <Card title="#04 - Número randomico" color="#581845">
            <Random min={5} max={10} />
          </Card>

          <Card title="#03 - Fragmentos" color="#AC0F97">
            <Frag />
          </Card>

          <Card title="#02 - Com paramêtros">
            <WithParameters
              Title="Situação do aluno: "
              student="Leonardo"
              note={2.1}
            />
          </Card>

          <Card title="#02 - Com paramêtros">
            <WithParameters
              id="props"
              Title="Situação do aluno: "
              student="Emily"
              note={9.5}
            />
          </Card>

          <Card title="#01 - Primeiro componente">
            <First />
          </Card>
        </div>
      </CardColor>
    </div>
  );
};
