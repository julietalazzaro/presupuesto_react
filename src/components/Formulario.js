import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error.js";
import shortId from "shortid";

const Formulario = ({ setGasto, setCreargasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim().length === 0) {
      setError(true);
      return;
    }
    setError(false);

    //construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortId.generate(),
    };

    //pasar el gasto al  componente principal
    setGasto(gasto);
    setCreargasto(true);

    //resetear el form
    setNombre("");
    setCantidad(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agrega tus gastos aqui</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o el gasto es incorrecto" />
      ) : null}
      <div className="campo">
        <label htmlFor="nombre">Nombre Gasto</label>
        <input
          name="nombre"
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="gasto">Cantidad Gasto</label>
        <input
          name="gasto"
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCreargasto: PropTypes.func.isRequired,
};

export default Formulario;
