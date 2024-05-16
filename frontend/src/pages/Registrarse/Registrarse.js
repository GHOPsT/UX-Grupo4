import React from 'react';
import './globals.css';
import './style.css';

const Registrarse = () => {
  return (
    <div className="registrarse">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="div">
            <div className="text-wrapper">Registro</div>
            <img className="line" src="img/line-3.svg" alt="line" />
          </div>
          <div className="div-wrapper"><div className="text-wrapper-2">Rellena los siguientes campos</div></div>
          <div className="frame-2"><input className="nombre-completo" /> <img className="user" src="img/user.svg" alt="user" /></div>
          <div className="frame-2"><input className="e-mail" /> <img className="mail" src="img/mail.svg" alt="mail" /></div>
          <div className="frame-2">
            <input className="contrasea" />
            <img className="lock" src="img/lock-1.svg" alt="lock" />
            <div className="group">
              <div className="overlap-group"><div className="ellipse"></div></div>
            </div>
          </div>
          <div className="frame-2">
            <input className="confirmar-contrasea" />
            <div className="overlap-group-wrapper">
              <div className="overlap-group"><div className="ellipse"></div></div>
            </div>
            <img className="img" src="img/lock-1.svg" alt="lock" />
          </div>
          <div className="frame-3"><div className="text-wrapper-3">Registrarse</div></div>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;
