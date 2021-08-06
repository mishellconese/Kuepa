<<<<<<< HEAD
=======

>>>>>>> 5ae21c704302053c0e6dbadf6d8c3f0a84946648
import logo from '../../utils/imagenes/kuepa_logo.png'
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