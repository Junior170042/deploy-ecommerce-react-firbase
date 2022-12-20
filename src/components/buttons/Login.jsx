import React from 'react'
import config from './Firebase';
import {
    getAuth, onAuthStateChanged, signInWithEmailAndPassword
} from 'firebase/auth';

const auth = getAuth(config);
const Login = () => {

    const errUser = document.querySelector('.errorUsers');
    const errPass = document.querySelector('.errorPasss');


    //cuando existe un cambio en la sesión
    onAuthStateChanged(auth, (user) => {
        if (user) {
            localStorage.setItem('userState', true);

        }

    })
    const showErrors = (err) => {

        if (err === 'auth/user-not-found') {



            errUser.textContent = "Usuario no registrado";
            errUser.classList.remove('d-none')
            errPass.classList.add('d-none')


        }
        if (err === 'auth/wrong-password') {

            if (errPass) {

                errPass.textContent = "Contraseña incorrecta";
                errPass.classList.remove('d-none');
                errUser.classList.add('d-none');
            }

        }
    }

    const handleUserLogin = async (e) => {
        e.preventDefault();
        const correo = e.target.EmailUser.value
        const pass = e.target.PasswordUser.value;


        try {
            const session = await signInWithEmailAndPassword(auth, correo, pass);
            if (session) {
                window.location.href = "/";
                if (errUser && errPass) {

                    errUser.classList.add('d-none');
                    errPass.classList.add('d-none')
                }
            }

        } catch (err) {
            showErrors(err.code);
        }
    }

    return (
        <>
            {/* Button trigger modal */}
            <button
                type="button"
                className="btn btn-outline-primary ms-auto me-3"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
            >
                <span className="fa fa-sign-in me-1"></span> Iniciar sesión
            </button>
            {/* Modal */}
            <div
                className="modal fade"
                id="loginModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Inicio de sesión
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">


                            <form onSubmit={handleUserLogin}>
                                <div className="mb-3">
                                    <label htmlFor="Email" className="form-label fw-bolder">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Corro electrónico"
                                        className="form-control"
                                        required
                                        id="Email"
                                        name="EmailUser"
                                        aria-describedby="emailHelp"
                                    />
                                    <p className="errorUsers text-danger d-none mb-2"></p>
                                    <div id="emailHelp" className="form-text my-2">
                                        Tu correo no será com partido con nadie más.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Password" className="form-label fw-bolder">
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder='Ingresa la contraseña'
                                        id="Password"
                                        required
                                        name="PasswordUser"
                                    />
                                    <p className="errorPasss text-danger d-none"></p>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        Recuérdame
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">
                                    Ingresar
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login