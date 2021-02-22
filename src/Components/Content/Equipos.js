import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cargadora from "./images/Cargadora.jpg";
import Palaretro from "./images/Palaretro.jpg";
import Compactador from "./images/Compactador.jpg";
import Tendedoras from "./images/Tendedoras.jpg";
import Motoniveladora from "./images/Motoniveladora.jpg";
import Excavadora from "./images/Excavadora.jpg";
import CompactadorAsfalto from "./images/CompactadorAsfalto.jpg";
import Camiones from "./images/Camiones.jpg";
import Minicargadora from "./images/Minicargadora.jpg";
import Tiendetubos from "./images/Tiendetubos.jpg";
import Motor from "./images/Motor.jpg";
import Cargadoras from "./Maquinas/Cargadoras";
import SpringModal from "../Modal/Modal";
import "./contentStyle.css";
const Equipos = () => {
  return (
    <div>
      <Router>
        <div className="body-equipos">
          <Link to="/equipos/cargadoras">
            <div className="equipo-item">
              <SpringModal />
              <h3 className="title-item">CARGADORAS</h3>
              <img src={Cargadora} alt="Cargadora" />
            </div>
          </Link>
          <div className="equipo-item">
            <h3 className="title-item">PALA Y RETRO</h3>
            <img src={Palaretro} alt="Palaretro" />
          </div>
          <div className="equipo-item">
            <h3 className="title-item">COMPACTADORES DE SUELO</h3>
            <img src={Compactador} alt="Compactador" />
          </div>
          <div className="equipo-item">
            <h3 className="title-item">TENDEDORAS DE ASFALTO</h3>
            <img src={Tendedoras} alt="Tendedoras" />
          </div>
          <div className="equipo-item">
            <h3 className="title-item">MOTONIVELADORAS</h3>
            <img src={Motoniveladora} alt="Motoniveladora" />
          </div>
          <div className="equipo-item">
            <h3 className="title-item">EXCAVADORAS</h3>
            <img src={Excavadora} alt="Excavadora" />
          </div>
          <div className="equipo-item">
            <h3 className="title-item">COMPACTADORES DE ASFALTO</h3>
            <img src={CompactadorAsfalto} alt="CompactadorAsfalto" />
          </div>
          <div className="equipo-item">
            <h3 className="title-item">CAMIONES ARTICULADOS</h3>
            <img src={Camiones} alt="Camiones" />
          </div>
          <div className="equipo-item">
            <h3 className="title-item">MINI CARGADORAS</h3>
            <img src={Minicargadora} alt="Minicargadora" />
          </div>
          <div className="equipo-item">
            <h3 className="title-item">TIENDE TUBOS</h3>
            <img src={Tiendetubos} alt="Tiendetubos" />
          </div>
          <div className="equipo-item">
            <h3 className="title-item">MOTORES</h3>
            <img src={Motor} alt="Motor" />
          </div>
        </div>
        <Switch>
          <Route exact path="/equipos/cargadoras">
            <Cargadoras />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Equipos;
