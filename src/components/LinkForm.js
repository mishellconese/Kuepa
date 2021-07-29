import React from 'react'

 const LinkForm = () => {
    return (
        <form className="card carb-body">
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i class="material-icons">account_circle</i> 
                </div>
                <input type="text"className="form-control"
                placeholde="Nombre"name="url"/>
            </div>

            <div className="form-group input_group">
                <div className="input-group-text bg-ligth">
                <i class="material-icons">info</i>
                </div>
                <input type="text" className="form-control" name="name" placeholder="Websitename"/>
            </div>


        </form>
    )
    
};

export default LinkForm;