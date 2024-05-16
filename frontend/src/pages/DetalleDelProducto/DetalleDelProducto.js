// src/pages/IniciarSesion/IniciarSesion.js
import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';

// Importa las imágenes SVG
import vectorSvg from './img/vector.svg';
import frame198Svg from './img/frame-198.svg';
import line7Svg from './img/line-7.svg';
import headphonesSvg from './img/headphones-svgrepo-com-1.svg';
import userSvg from './img/user.svg';
import shoppingCartSvg from './img/shopping-cart.svg';

const DetalleProducto = () => {
  return (
    <div className="detalle-del-producto">
      <div className="div">
        <div className="frame">
          <div className="div-wrapper"><div className="text-wrapper">Acción</div></div>
          <div className="div-wrapper"><div className="text-wrapper">Aventura</div></div>
          <div className="div-wrapper"><div className="text-wrapper">Mundo Abierto</div></div>
        </div>
        <div className="frame-2"><div className="text-wrapper-2">Añadir al carro</div></div>
        <div className="frame-3">
          <img className="img" src="img/frame.svg" alt="frame" />
          <div className="text-wrapper-3">1</div>
          <img className="img" src="img/frame-1.svg" alt="frame-1" />
        </div>
        <div className="frame-4"><div className="text-wrapper-4">-9%</div></div>
        <div className="text-wrapper-5">Marvel Spiderman</div>
        <div className="frame-5">
          <div className="text-wrapper-6">S/100</div>
          <div className="text-wrapper-7">S/110</div>
        </div>
        <div className="text-wrapper-8">Estado: Nuevo</div>
        <p className="p">
          Siente todo el poder de un Spider-Man más experimentado con combate improvisado, acrobacias dinámicas,
          recorrido urbano fluido e interacciones con el entorno.
        </p>
        <div className="text-wrapper-9">Géneros</div>
        <img className="image" src={vectorSvg} alt="image-1" />
        <img className="image-2" src="img/image-2.png" alt="image-2" />
        <img className="image-3" src="img/image-5.png" alt="image-3" />
        <img className="image-4" src="img/image-6.png" alt="image-4" />
        <div className="frame-6">
          <div className="frame-7">
            <img className="star" src="img/star-1.svg" alt="star-1" />
            <img className="star" src="img/star-2.svg" alt="star-2" />
            <img className="star" src="img/star-3.svg" alt="star-3" />
            <img className="star" src="img/star-4.svg" alt="star-4" />
            <img className="star-2" src="img/star-5.svg" alt="star-5" />
          </div>
          <p className="element"><span className="span">4.5/</span> <span className="text-wrapper-10">5</span></p>
        </div>
        <img className="line" src={line7Svg} alt="line-3" />
        <img className="line-2" src={line7Svg} alt="line-3" />
        <img className="line-3" src={line7Svg} alt="line-3" />
        <div className="frame-wrapper">
          <div className="frame-8">
            <div className="frame-9">
              <div className="frame-10">
                <div className="frame-11">
                  <p className="RESEARCH">
                    <span className="text-wrapper-11">¿Alguna pregunta? Llámenos 24/7!</span>
                    <span className="text-wrapper-12">&nbsp;</span>
                  </p>
                  <p className="stratus-RESEARCH">967 673 169<br />963 542 293</p>
                  <p className="cont-ctenos">
                    <span className="text-wrapper-11">Contáctenos<br /></span>
                    <span className="text-wrapper-13">gamecycle@gmail.com</span>
                  </p>
                  <img className="frame-12" src="img/frame-118.svg" alt="frame-118" />
                </div>
                <div className="frame-13">
                  <div className="text-wrapper-14">Tendencias</div>
                  <div className="frame-14">
                    <div className="text-wrapper-15">PS4</div>
                    <div className="text-wrapper-16">PS3</div>
                    <div className="text-wrapper-16">XBOX ONE</div>
                    <div className="text-wrapper-16">XBOX 360</div>
                    <div className="text-wrapper-16">NINTENDO SWITCH</div>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="text-wrapper-14">Información</div>
                  <div className="frame-14">
                    <div className="text-wrapper-15">Sobre nosotros</div>
                    <div className="text-wrapper-16">Contactenos</div>
                    <div className="text-wrapper-16">FAQs</div>
                    <div className="text-wrapper-16">Devoluciones</div>
                    <div className="text-wrapper-16">Políticas</div>
                    <div className="text-wrapper-16">Terminos y condiciones</div>
                  </div>
                </div>
                <div className="frame-16">
                  <div className="text-wrapper-14">Atención al cliente</div>
                  <div className="frame-14">
                    <div className="text-wrapper-15">Mi cuenta</div>
                    <div className="text-wrapper-16">Rastrear orden</div>
                    <div className="text-wrapper-16">Visto recientemente</div>
                    <div className="text-wrapper-16">Lista de deseos</div>
                    <div className="text-wrapper-16">Comparar</div>
                    <div className="text-wrapper-16">Ser un vendedor</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-17">
              <div class="img-wrapper"><img class="VISA" src="img/visa.png" /></div>
              <div class="img-wrapper"><img class="MASTER" src="img/master.png" /></div>
              <div class="img-wrapper"><img class="image-5" src="img/image-128.png" /></div>
              <div class="img-wrapper"><img class="INSLALLMENTS" src="img/inslallments.png" /></div>
            </div>
          </div>
        </div>
        <div class="overlap-group-wrapper">
          <div class="overlap-group"><div class="element-e">© 2023 Game Cycle</div></div>
        </div>
        <div class="frame-18">
          <div class="group">
            <div class="text-wrapper-17">GAME CYCLE</div>
            <img class="vector" src="img/vector.svg" />
          </div>
          <div class="frame-19">
            <input class="buscar-producto" />
            <div class="overlap-group-2">
              <div class="text-wrapper-18">Todas las categorías</div>
              <img class="chevron-down" src="img/chevron-down.svg" />
            </div>
            <img class="line-4" src="img/line-7.svg" />
            <img class="frame-20" src="img/frame-198.svg" />
          </div>
          <div class="group-2">
            <div class="frame-21">
              <div class="frame-22">
                <div class="frame-23">
                  <img class="group-3" src="img/group.png" />
                  <div class="frame-24"><div class="text-wrapper-19">Delivery</div></div>
                </div>
                <div class="frame-25">
                  <img class="group-4" src="img/group-95.png" />
                  <div class="frame-26"><div class="text-wrapper-20">Retornar</div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-27">
            <div class="ll-menos-wrapper"><div class="ll-menos">Llámenos</div></div>
            <div class="frame-28">
              <img class="headphones-svgrepo" src="img/headphones-svgrepo-com-1.svg" />
              <div class="text-wrapper-21">+51 964542293</div>
            </div>
          </div>
          <div class="frame-29">
            <img class="user" src="img/user.svg" />
            <div class="frame-30">
              <div class="frame-31">
                <div class="group-wrapper">
                  <div class="group-5">
                    <div class="overlap-group-3">
                      <div class="text-wrapper-22">3</div>
                      <img class="shopping-cart" src="img/shopping-cart.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img class="vector-2" src="img/vector-1.svg" />
          </div>
        </div>
        <div class="frame-32">
          <div class="navbar">
            <div class="frame-33">
              <div class="group-6">
                <div class="rectangle"></div>
                <div class="rectangle-2"></div>
                <div class="rectangle-3"></div>
              </div>
              <div class="text-wrapper-23">Búsqueda por categoría</div>
            </div>
            <div class="text-wrapper-24">Inicio</div>
            <div class="text-wrapper-25">Nuevo</div>
            <div class="text-wrapper-26">Usado</div>
            <div class="text-wrapper-27">Vender</div>
          </div>
          <img class="frame-34" src="img/frame-118-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
