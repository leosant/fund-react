import React from "react";

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

import "./App.css";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <CardColor />

    <div className="Cards">
      <Card title="#07 - Lista de produtos" color="#607880">
        <TableProduct/>
      </Card>
      <Card title="#06 - Lista de alunos" color="#545890">
        <ListStudent/>
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
  </div>
);
