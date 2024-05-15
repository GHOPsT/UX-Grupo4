import React from 'react';
import '../styles/main_page.css'; // Importar el archivo CSS de estilos específicos para inicio_sesion.jsx

function Principal() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Tienda</a></li>
                        <li><a href="#">Juegos</a></li>
                        <li><a href="#">Vender</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <h1>Compra, Vende e Intercambia</h1>
                <p>Revende tus juegos y ahorra en los de próxima generación.</p>

                <section>
                    <h2>Mes de Terror</h2>
                    <div className="carousel">
                        {/* Aquí iría el carrusel de imágenes */}
                    </div>
                    <button>Ver más</button>
                </section>

                <section>
                    <h2>Nuevas Ofertas</h2>
                    <div className="ofertas">
                        <div className="oferta">
                            <img src="juego1.jpg" alt="Juego 1" />
                            <h3>Juego 1</h3>
                            <button>Comprar</button>
                        </div>
                        <div className="oferta">
                            <img src="juego2.jpg" alt="Juego 2" />
                            <h3>Juego 2</h3>
                            <button>Comprar</button>
                        </div>
                        {/* Más ofertas */}
                    </div>
                </section>
            </main>

            <footer>
                <div className="columna">
                    <h4>Información</h4>
                    <ul>
                        <li><a href="#">Sobre nosotros</a></li>
                        <li><a href="#">Trabajos</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                    </ul>
                </div>
                <div className="columna">
                    <h4>Ayuda</h4>
                    <ul>
                        <li><a href="#">Preguntas frecuentes</a></li>
                        <li><a href="#">Devoluciones</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className="columna">
                    <h4>Información</h4>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Prensa</a></li>
                        <li><a href="#">Eventos</a></li>
                    </ul>
                </div>
                <div className="columna">
                    <h4>Síguenos</h4>
                    <ul className="redes-sociales">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div className="metodos-pago">
                    <img src="visa.png" alt="Visa" />
                    <img src="mastercard.png" alt="Mastercard" />
                    <img src="american-express.png" alt="American Express" />
                    <img src="paypal.png" alt="PayPal" />
                </div>
            </footer>
        </div>
    );
}

export default Principal;
