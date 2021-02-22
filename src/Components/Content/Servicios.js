import React from "react";
import "./contentStyle.css";

const Servicios = () => {
  return (
    <div>
      <h1 className="servicios-title">SERVICIOS</h1>
      <div className="servicios-body">
        <div className="servicios-body-container">
          <div>
            <h2>CONTRATOS DE MANTENIMIENTO</h2>
            <p>
              Nuestros clientes confian en nosotros para realizar el
              mantenimiento preventivo de sus equipos. Mediante computadoras
              especiales se analiza el historial de los equipos y a través de
              estos datos de funcionamiento podemos asesorar al cliente sobre la
              correcta la aplicacion de los equipos. Estos informes son muy
              utiles ya que pueden utilizarlos en mejorar la productividad de
              las máquinas, reducir tiempos no productivos y tener información
              sobre el nivel de conocimiento y capacidad de los operadores.
            </p>
            <p>
              Contratos Azules, Plata u Oro. Consulte con nuestros vendedores
            </p>
          </div>
          <div>
            <h2> DIAGNÓSTICOS </h2>
            <p>
              Contamos con la experiencia para diagnosticar las causas de los
              problemas de su equipo. Nuestros técnicos cuentan con capacitación
              permanente con soporte de VOLVO CE para realizar dicho diagnóstico
              de la forma más eficaz posible. Las herramientas de software y las
              computadoras de los equipos VOLVO están a la vanguardia y permiten
              adelantarse a ciertos problemas que puedan suceder y tomar las
              medidas necesarias para evitarlas
            </p>
          </div>
          <div>
            <h2>TRABAJOS EN NUESTRO TALLER</h2>
            <p>
              Nuestros talleres están preparados para realizar reparaciones
              INTEGRALES. Nuestro equipo de trabajo sigue un proceso que
              comienza con el diagnóstico y se basada en el contacto con el
              cliente para llegar a la mejor solución costo beneficio.
              Garantizamos los trabajos quedando los informes finales archivados
              en caso de ser necesitados en el futuro.
            </p>
          </div>
          <div>
            <h2>TRABAJOS A DOMICILIO</h2>
            <p>
              Contamos con moviles de servicio capacitados para resolver
              problemas que puedan aparecer en el lugar de trabajo de los
              equipos. Llegamos a toda la provincia de Santa Fe, Entre Ríos y
              Norte de la provincia de Bs As
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
