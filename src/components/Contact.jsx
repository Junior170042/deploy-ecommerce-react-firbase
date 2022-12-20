import React from 'react'
import MessageBox from './MessageBox';

const Contact = () => {
    const removeError = (id) => {
        if (id === 'name') return document.querySelector('p.errorNombre').classList.add("d-none");
        if (id === 'mail') return document.querySelector('p.errorCorreo').classList.add("d-none");
        if (id === 'message') return document.querySelector('p.errorMsj').classList.add("d-none");


    }

    const styleInputs = (e) => {
        if (e.target.value !== "") {
            e.target.classList.remove("error");
            console.log(e.target.id)
            removeError(e.target.id);

        }
    }

    function emailValidate(mail) {
        if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }

        return (false)
    }


    function mostrarErrores(array) {
        array.forEach(item => {
            item.errorType.classList.remove("d-none");
            item.errorType.textContent = item.error;
            item.campo.classList.add("error");
        })

    }
    const handleSubmitMessage = (e) => {

        const errores = [];
        e.preventDefault();
        const errorNombre = document.querySelector('.errorNombre');
        const errorCorreo = document.querySelector('.errorCorreo');
        const errorMsj = document.querySelector('.errorMsj');

        if (!e.target.nombre.value.trim()) {
            errores.push({ errorType: errorNombre, campo: e.target.nombre, error: "Este campo es requerido" })
        } else {
            if (!isNaN(e.target.nombre.value.trim())) {
                errores.push({ errorType: errorNombre, campo: e.target.nombre, error: "Ingrese un nombre válido" })
            } else if (e.target.nombre.value.trim().length < 3) {
                errores.push({ errorType: errorNombre, campo: e.target.nombre, error: "Nombre inválido(muy corto)" })
            }
        }
        if (!e.target.email.value.trim()) {
            errores.push({ errorType: errorCorreo, campo: e.target.email, error: "Este campo es requerido" })
        } else {
            if (!emailValidate(e.target.email.value.trim())) {
                errores.push({ errorType: errorCorreo, campo: e.target.email, error: "Correo inválido" })
            }
        }
        if (!e.target.message.value.trim()) {
            errores.push({ errorType: errorMsj, campo: e.target.message, error: "Este campo es requerido" })
        }

        if (errores.length !== 0) {
            mostrarErrores(errores)
            return false;
        } else {
            errorNombre.classList.add("d-none");
            errorCorreo.classList.add("d-none");
            errorMsj.classList.add("d-none");

            const alert = document.querySelector('.containerMsj');
            if (alert) {

                alert.classList.remove('d-none');
            }

            e.target.reset();
            return true;
        }



    }
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-12 text-center my-4 py-4">
                        <h1>¿Algunas dudas?</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-5 d-flex justify-content-center">
                            <img src="/assets/images/contact.png" alt="contact"
                                width="400px" height="400px"
                            >

                            </img>
                        </div>

                        <div className="col-md-6">
                            <form onSubmit={handleSubmitMessage}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="nombre"
                                        placeholder="Nombre completo"
                                        onChange={styleInputs}

                                    />
                                    <p className="errorNombre d-none name text-danger"></p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mail" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mail"
                                        name="email"
                                        placeholder="Nombre@example.com"
                                        onChange={styleInputs}

                                    />
                                    <p className="errorCorreo d-none mail text-danger"></p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="textArea" className="form-label">
                                        Mensaje
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="textArea"
                                        name="message"
                                        placeholder="Escribe tu mensaje"
                                        rows={4}
                                        onChange={styleInputs}
                                        defaultValue={""}
                                    />
                                    <p className="errorMsj d-none textArea text-danger"></p>
                                </div>

                                <button type="submit" className="btn btn-primary btns">Enviar mensaje</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <MessageBox message="Mensaje enviado exitosamente!" />
        </>
    )
}

export default Contact