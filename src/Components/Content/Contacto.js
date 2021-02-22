import React from "react";
import "./contentStyle.css";
import Map from "./Map";

const Contacto = () => {
  return (
    <div className="contacto-body">
      <div className="location">
        <Map />
      </div>
      <div className="contact-us">
        <div contact-us-top>
          <div>
            <h3>ROSARIO, SANTA FE</h3>
          </div>
          <div className="contact-us">
            <p className="p-text">CALLE EVA PERÓN 9501</p>
            <p className="p-text">TEL. 0341-4512600</p>
            <p className="p-text">info@pm.com.ar</p>
          </div>
        </div>
        <div className="contact-us-form">
          <form>
            <input className="input-form" type="text" placeholder="Name *" />
            <input className="input-form" type="email" placeholder="Email *" />
            <input className="input-form" type="text" placeholder="Subject *" />
            <textarea
              className="input-form"
              cols="15"
              rows="8"
              placeholder="Message"
            />
            <button type="button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
