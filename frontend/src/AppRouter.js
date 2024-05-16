// src/AppRouter.js
import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IniciarSesion from './pages/IniciarSesion/IniciarSesion.js';
import Registrarse from './pages/Registrarse/Registrarse.js';

const AppRouter = () => {
  return (
    <div>
      <IniciarSesion />
      <Registrarse />
    </div>
    /*<Router>
        <Routes>
            <Route path="/iniciar-sesion" component={IniciarSesion} />
            <Route path="/registrarse" component={Registrarse} />
            <Route exact path="/" component={IniciarSesion} />
        </Routes>
    </Router>*/
  );
};

export default AppRouter;
