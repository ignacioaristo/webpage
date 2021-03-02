import React, { useState } from "react";
import "./contentStyle.css";
import Map from "./Map";

const Contacto = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = () => {
    event.preventDefault();
    console.log(data);
    alert(
      "Name: " +
        data.name +
        "\n" +
        "Email: " +
        data.email +
        "\n" +
        "Subject: " +
        data.subject +
        "\n" +
        "Message :" +
        data.message +
        "\n"
    );
  };

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
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              className="input-form"
              onChange={handleChange}
              type="text"
              placeholder="Name *"
              //value={data.name}
            />
            <input
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Email *"
              className="input-form"
            />
            <input
              name="subject"
              type="text"
              onChange={handleChange}
              placeholder="Subject *"
              className="input-form"
            />
            <textarea
              name="message"
              onChange={handleChange}
              className="input-form"
              cols="15"
              rows="8"
              placeholder="Message"
            />
            <button className="input-form" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
