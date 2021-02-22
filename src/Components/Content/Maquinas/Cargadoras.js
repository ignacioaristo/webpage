import React, { useState } from "react";
import MaquinasItem from "../MaquinasItem";
import maquinasData from "../../../maquinasData.json";
import "../contentStyle.css";

const Cargadoras = () => {
  const [allMaquinas, setAllMaquinas] = useState(maquinasData);
  return (
    <div className="home-body">
      <div>
        <ul className="list-title">
          <li className="list-title-each">Modelo</li>
          <li className="list-title-each">Peso Operativo</li>
          <li className="list-title-each">Potencia Operativa</li>
          <li className="list-title-each">Capacidad Balde</li>
        </ul>
        {allMaquinas.map((maquina) => (
          <MaquinasItem key={maquina.id} maquina={maquina} />
        ))}
      </div>
    </div>
  );
};

export default Cargadoras;
