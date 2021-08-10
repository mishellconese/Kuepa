import React from 'react';


const Egresados = ({handleLogout}) => {
    return (
        <div>
            <p>Funcionó</p>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
  }

export default Egresados;