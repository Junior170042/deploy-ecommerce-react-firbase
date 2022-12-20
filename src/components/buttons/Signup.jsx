import React from 'react'
import HandleErrors from './HandleErrors';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut
}
    from 'firebase/auth';
import config from './Firebase';


const auth = getAuth(config);

export async function createAcount(mail, pass, user) {

    try {
        const newUser = await createUserWithEmailAndPassword(auth, mail, pass)
        localStorage.setItem('userName', user);
        localStorage.setItem('userState', true);
        if (newUser) {
            window.location.href = "/";
        }

    } catch (err) {
        showErrors(err.code);
    }
}

export const userOff = () => {
    signOut(auth);
    localStorage.setItem('userState', false);


    window.location.href = "/";
}

//Falta hacer
const showErrors = (err) => {
    const errUser = document.querySelector('.errorMail');
    const errPass = document.querySelector('.errorPass');
    if (err === 'auth/email-already-in-use') {

        errUser.textContent = "El correo ingresado ya pertenece a una cuenta";
        errUser.classList.remove('d-none')
        errPass.classList.add('d-none')
    }
    else if (err === 'auth/weak-password') {
        errPass.textContent = "La contraseña es muy débil ";
        errPass.classList.remove('d-none');
        errUser.classList.add('d-none');

    } else if (err === 'auth/invalid-email') {
        errUser.textContent = "El correo no es válido";
        errUser.classList.remove('d-none');
        errPass.classList.add('d-none');
    }
}




const Signup = () => {

    const removeError = (id) => {
        if (id === 'user') return document.querySelector('p.errorUser').classList.add("d-none");
        if (id === 'userMail') return document.querySelector('p.errorMail').classList.add("d-none");
        if (id === 'userPass') return document.querySelector('p.errorPass').classList.add("d-none");
        if (id === 'rePass') return document.querySelector('p.errorRepass').classList.add("d-none");

    }

    const styleInputs = (e) => {
        if (e.target.value !== "") {
            e.target.classList.remove("error");
            removeError(e.target.id);

        }
    }



    return (
        <>
            {/* Button trigger modal */}
            <button
                type="button"
                className="btn btn-outline-primary ms-auto me-1"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
            >
                <span className="fa fa-user-plus me-1"></span> Registrar
            </button>
            {/* Modal */}
            <div
                className="modal fade"
                id="signupModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Registrar
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form id="registerForm" onSubmit={HandleErrors}>

                                <div className="mb-3">
                                    <label htmlFor="user" className="form-label fw-bolder">
                                        Usuario
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Nombre de suario"
                                        className="form-control"
                                        id="user"
                                        name="user"
                                        aria-describedby="emailHelp"
                                        onChange={styleInputs}
                                    />
                                    <p className="errorUser text-center d-none text-danger"></p>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="userMail" className="form-label fw-bolder">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Ingrese corro electrónico"
                                        className="form-control"
                                        name="mail"
                                        id="userMail"
                                        aria-describedby="emailHelp"
                                        onChange={styleInputs}
                                    />
                                    <p className="errorMail text-center d-none text-danger"></p>
                                    <div id="emailHelp" className="form-text">
                                        Tu correo no será com partido con nadie más.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userPass" className="form-label fw-bolder">
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder='Ingrese la contraseña'
                                        id="userPass"
                                        name="password"
                                        onChange={styleInputs}
                                    />
                                    <p className="errorPass text-center d-none text-danger"></p>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="rePass" className="form-label fw-bolder">
                                        Confirmar Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder='Confirma la contraseña'
                                        id="rePass"
                                        onChange={styleInputs}
                                    />
                                    <p className="errorRepass text-center d-none text-danger"></p>
                                </div>

                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">
                                    Registrar
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Signup