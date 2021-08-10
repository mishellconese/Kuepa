import React from 'react';
import logo from './utils/imagenes/kuepa_logo.png'
import './estilo.header.css'

function header() {
    return (

        <div class="body">

                <div class="cont1">

                    <div class="divz">
                        <div class="header"></div>
                        <div class="hamburger"></div>
                        <div class="_layer -top"></div>
                        <div class="_layer -mid"></div>
                        <div class="_layer -bottom"></div>
                    </div>

                    <img class="logo" src={logo} alt="Kuepa logo" />

                </div>
        </div>

    );
  }

export default header;