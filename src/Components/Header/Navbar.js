import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Content/Home";
import Equipos from "../Content/Equipos";
import Alquileres from "../Content/Alquileres";
import Repuestos from "../Content/Repuestos";
import Servicios from "../Content/Servicios";
import Contacto from "../Content/Contacto";
import "./style.css";

const Navbar = () => {
  return (
    <Router>
      <div>
        <ul className="navbar-style">
          <Link to="/home" className="navbar-list">
            <li>HOME</li>
          </Link>
          <Link to="/equipos" className="navbar-list">
            <li>EQUIPOS</li>
          </Link>
          <Link to="/alquileres" className="navbar-list">
            <li>ALQUILERES</li>
          </Link>
          <Link to="/repuestos" className="navbar-list">
            <li>REPUESTOS</li>
          </Link>
          <Link to="/servicios" className="navbar-list">
            <li>SERVICIOS</li>
          </Link>
          <Link to="/contacto" className="navbar-list">
            <li>CONTACTO</li>
          </Link>
        </ul>
      </div>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/equipos">
          <Equipos />
        </Route>
        <Route exact path="/alquileres">
          <Alquileres />
        </Route>
        <Route exact path="/repuestos">
          <Repuestos />
        </Route>
        <Route exact path="/servicios">
          <Servicios />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
