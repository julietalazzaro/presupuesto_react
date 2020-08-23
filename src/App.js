import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta.js";
import Formulario from "./components/Formulario.js";
import Listado from "./components/Listado.js";
import ControlPresupuesto from "./components/ControlPresupuesto.js";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarpregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCreargasto] = useState(false);

  //useEffect que actualiza el restante
  useEffect(() => {
    if (creargasto) {
      //agrega nuevo presupuesto
      setGastos([...gastos, gasto]);

      //resta del presupuesto
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      //reseteo
      setCreargasto(false);
    }
  }, [gasto, gastos, creargasto, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {mostrarpregunta ? (
          <Pregunta
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setMostrarpregunta={setMostrarpregunta}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Formulario setGasto={setGasto} setCreargasto={setCreargasto} />
            </div>
            <div className="one-half column">
              <Listado gastos={gastos} />
              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
