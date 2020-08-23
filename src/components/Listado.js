import React from "react";
import Gasto from "./Gasto.js";

const Listado = ({ gastos }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    {gastos.map((gasto) => (
      <Gasto key={gasto.id} gasto={gasto} />
    ))}
  </div>
);

export default Listado;
