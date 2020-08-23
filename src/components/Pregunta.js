import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error.js";

const Pregunta = ({ setPresupuesto, setRestante, setMostrarpregunta }) => {
  //definir state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setCantidad(parseInt(e.target.value), 10);
  };

  //sumbit
  const handleSubmit = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    //si pasa la validacion
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarpregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handleChange}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setMostrarpregunta: PropTypes.func.isRequired,
};

export default Pregunta;
