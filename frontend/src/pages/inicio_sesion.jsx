import React from 'react';
import '../styles/inicio_sesion.css'; // Importar el archivo CSS de estilos específicos para inicio_sesion.jsx

function Inicio() {
    return (
        <div>
            <header>
                
                {/* Aquí iría el logotipo */}
            </header>

            <main>
                <section>
                    <h1>Bienvenido a gamecycle.com</h1>
                    <form>
                        <div>
                            <button>Iniciar sesión</button>
                            <button>Registrarse</button>
                        </div>
                        <div>
                            <input type="text" id="iniciar-sesion" placeholder="Registrarse" />
                        </div>
                        <div>
                            <input type="password" id="contrasena" />
                        </div>
                        <div>
                            <input type="checkbox" id="recordar-contrasena" />
                            <label htmlFor="recordar-contrasena">Recordar contraseña</label>
                        </div>
                        <div>
                            <button type="submit">Conectarse</button>
                            <p>o conectarse con</p>
                            <div>
                                {/* Aquí irían los enlaces a las redes sociales */}
                                <a href="#">Facebook</a>
                                <a href="#">Twitter</a>
                                <a href="#">Instagram</a>
                            </div>
                        </div>
                    </form>
                </section>
                <section>
                    {/* Aquí iría el contenido principal de la página */}
                </section>
            </main>
        </div>
    );
}

export default Inicio;
