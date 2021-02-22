import React from "react";
import "./contentStyle.css";
import AlqImg from "./images/ImagenAlquileres.jpg";

const Alquileres = () => {
  return (
    <div className="alquileres-body">
      <h1> ALQUILER </h1>
      <ul>
        <li className="alquiler-list-item">POR DIA</li>
        <li className="alquiler-list-item">POR SEMANA</li>
        <li className="alquiler-list-item">POR MES</li>
      </ul>
      <div className="alquileres-container">
        <div>
          <p>
            Para realizar sus trabajo puede contar con nuestro plantel de
            equipos.
          </p>
          <p>
            Contamos con un plantel de maquinas modernas y preparadas para
            asistirlo en sus obras
          </p>
          <p>Equipos para:</p>
          <ul>
            <li>Obras civiles</li>
            <li>Movimiento de suelos o materiales a granel</li>
            <li>Compactacion de suelos, asfalto u hormigón</li>
            <li>Demolición</li>
            <li>Energía</li>
            <li>Construcciones de casas, obras particulares</li>
            <li>Muchas otras soluciones para empresas o personas</li>
          </ul>
        </div>
        <div>
          <img src={AlqImg} alt="Alquileres" className="Alq-Img" />
        </div>
      </div>
    </div>
  );
};

export default Alquileres;
