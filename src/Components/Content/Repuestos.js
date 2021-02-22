import React from "react";
import "./contentStyle.css";

const Repuestos = () => {
  return (
    <div className="repuestos-body">
      <h1>REPUESTOS</h1>
      <div>
        <p>
          Nuestros vendedores de repuestos están capacitados para asesorarlo en
          los pedidos de repuestos.
        </p>
        <p>
          Los sistemas exclusivos de distribuidores VOLVO CE estan compuestos
          por
        </p>
        <ol>
          <li>Sistemas que monitorean los equipos y su funcionamiento.</li>
          <li>Sistemas que identifican sus fallas.</li>
          <li>Computadoras con interfaces especiales.</li>
          <li>
            Programas para identificar piezas específicas de su equipo según
            número de serie; asegura la mejor disponibilidad necesaria para no
            tener paradas imprevistas.
          </li>
        </ol>
        <p>
          Adicionalmente estamos entrenados para trabajar en equipo con los
          clientes para determinar la estrategia óptima a seguir para prever las
          partes necesarias en el momento justo.
        </p>
        <ul className="repuestos-ul">
          <li>Motor</li>
          <li>Hidráulica</li>
          <li>Electrónica</li>
          <li>Electricidad</li>
          <li>Filtros</li>
          <li>Herramientas de Corte</li>
          <li>Tren Rodante</li>
          <li>Cilindros</li>
        </ul>
      </div>
    </div>
  );
};

export default Repuestos;
