import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { toast } from "react-toastify";

const LinksForm = (props) => {
  const initialStateValues = {
    url: "",
    name: "",
    description: "",
    contacto: "",
    contrato: "",
    salario:"",
    razon:"",
    trabajo:"",
    egreso:"",
    programa:"",
    correo:"",
    direccion:"",
    telefono:"",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validURL(values.url)) {
      return toast("invalid url", { type: "warning", autoClose: 1000 });
    }

    props.addOrEditLink(values);
    setValues({ ...initialStateValues });
  };

  const getLinkById = async (id) => {
    const doc = await db.collection("links").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    <form onSubmit={handleSubmit} className="card card-body border-primary">

<div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">account_circle</i>
        </div>
        <input
          type="text"
          value={values.name}
          name="name"
          placeholder="Nombre completo"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">info</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Número de id"
          value={values.url}
          name="url"
          onChange={handleInputChange}
        />
      </div>
      
      <div className="form-group">
        <textarea
          rows="1"
          className="form-control"
          placeholder="Teléfono"
          name="telefono"
          value={values.telefono}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <textarea
          rows="1"
          className="form-control"
          placeholder="Dirección actual"
          name="direccion"
          value={values.direccion}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <textarea
          rows="1"
          className="form-control"
          placeholder="Correo electronico"
          name="correo"
          value={values.correo}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <textarea
          rows="1"
          className="form-control"
          placeholder="Programa"
          name="programa"
          value={values.programa}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <textarea
          rows="1"
          className="form-control"
          placeholder="Periodo de egreso"
          name="egreso"
          value={values.egreso}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <textarea
          rows="1"
          className="form-control"
          placeholder="Trabaja actualmente enfocado a su egreso"
          name="trabajo"
          value={values.trabajo}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <textarea
          rows="1"
          className="form-control"
          placeholder="Razón por las cual no se ha podido ubicar laboralmete"
          name="razon"
          value={values.razon}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <textarea
          rows="1"
          className="form-control"
          placeholder="Salario base"
          name="salario"
          value={values.salario}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <textarea
          rows="1"
          className="form-control"
          placeholder="Tipo de contrato"
          name="contrato"
          value={values.contrato}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-uno">
        <textarea
          rows="1"
          className="form-control"
          placeholder="Contacto adicional"
          name="contacto"
          value={values.contacto}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Save" : "Update"}
      </button>
    </form>
    
  );
};
<div></div>
export default LinksForm;