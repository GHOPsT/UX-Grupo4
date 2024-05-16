// src/pages/IniciarSesion/IniciarSesion.js
import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';

const PantallaDesplegableVenta = () => {
  return (
    <div class="pantalla-despegable">
      <div class="div">
        <div class="overlap-group">
          <div class="text-wrapper">Ventas</div>
          <div class="overlap">
            <div class="text-wrapper-2">Estas vendiendo 2 juegos</div>
            <img class="x-square" src="img/x-square.svg" />
          </div>
          <img class="vector" src="img/vector.svg" />
        </div>
        <img class="line" src="img/line-13.svg" />
        <div class="text-wrapper-3">Posible ingreso</div>
        <div class="text-wrapper-4">S/ 200</div>
        <div class="frame"><div class="text-wrapper-5">Vender más</div></div>
        <div class="frame-2">
          <div class="frame-3">
            <img class="ljcxangrw-x" src="img/ljc1xangrw-540x-1.png" />
            <p class="p">
              <span class="span">Sackboy: Una gran aventura<br /></span>
              <span class="text-wrapper-6">Unid: 1<br />S/ 100</span>
            </p>
            <img class="trash" src="img/trash-2-1.svg" />
          </div>
          <img class="img" src="img/line-17.svg" />
          <div class="frame-3">
            <img class="ljcxangrw-x" src="img/ljc1xangrw-540x-1-1.png" />
            <p class="p">
              <span class="span">The Last of Us 2<br /></span> <span class="text-wrapper-6">Unid: 1<br />S/ 100</span>
            </p>
            <img class="trash" src="img/trash-2-1.svg" />
          </div>
          <img class="img" src="img/line-17.svg" />
        </div>
      </div>
    </div>
  );
};

export default PantallaDesplegableVenta;
