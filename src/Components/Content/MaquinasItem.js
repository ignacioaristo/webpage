import React from "react";
import "./maquinasItem.css";

const MaquinasItem = (props) => {
  return (
    <div>
      <ul className="table-maquinas componente">
        <li>{props.maquina.modelo}</li>
        <li>{props.maquina.pesoOperativo}</li>
        <li>{props.maquina.potenciaNeta}</li>
        <li>{props.maquina.capacidadBalde}</li>
      </ul>
    </div>
  );
};

export default MaquinasItem;
