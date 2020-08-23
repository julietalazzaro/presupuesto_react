import React, { Fragment } from "react";
import { revisarPresupuesto } from "../Helpers.js";

const ControlPresupuesto = ({ restante, presupuesto }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: $ {presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: $ {restante}
      </div>
    </Fragment>
  );
};

export default ControlPresupuesto;
