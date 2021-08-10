import React from 'react';
import derecho from './utils/imagenes/image_3.png'
import './index.css'

function home() {
    return (

        <section className="body">

            <div className="cont1">

               <div className="div">

                  <p className="inicio">Iniciar Sesión</p>

                  <p className="txt">Nombre de Usuario</p>

                  <input className="barra" type="text" name="UseR" />

                  <p className="txt">Contraseña</p>

                  <input className="barra" type="password" name="Pass" />

                 </div>

                  <div className="esq">
                      <img className="img1" src={derecho} alt="kuepa" />
                 </div>

                <a className="boton" href="#">Iniciar Sesión</a>

            </div>
        </section>
   );
}
export default home;